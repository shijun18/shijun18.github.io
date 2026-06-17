const config = window.siteConfig;
const allContent = window.siteContent;

const state = {
  language: config.defaultLanguage,
  theme: localStorage.getItem("site-theme") || config.defaultTheme
};

const getContent = () => allContent[state.language] || allContent[config.defaultLanguage];

const getValue = (path) =>
  path.split(".").reduce((value, key) => (value ? value[key] : undefined), getContent());

const getLastUpdatedDate = () => {
  const modified = new Date(document.lastModified);
  if (Number.isNaN(modified.getTime())) return getValue("meta.updated") || "";

  const year = modified.getFullYear();
  const month = String(modified.getMonth() + 1).padStart(2, "0");
  const day = String(modified.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const revealLoadedVisitStats = () => {
  const containers = Array.from(document.querySelectorAll("[data-stat-container]"));
  if (!containers.length) return true;

  return containers.every((container) => {
    const value = container.querySelector("[data-stat-value]");
    const hasCount = /^(?:\d+(?:\.\d+)?[KWE]?|\d+)$/.test(value?.textContent.trim() || "");
    if (hasCount) container.hidden = false;
    return hasCount;
  });
};

const watchVisitStats = () => {
  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (revealLoadedVisitStats() || attempts >= 40) {
      window.clearInterval(timer);
    }
  }, 500);
};

const createIcon = (name, className = "icon") => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  const iconName = name === "researchgate" ? "link" : name;
  svg.classList.add(...className.split(" "));
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  use.setAttribute("href", `#icon-${iconName}`);
  svg.append(use);
  return svg;
};

const sectionIcons = {
  biography: "biography",
  news: "news",
  research: "research",
  publications: "publications",
  projects: "projects",
  apps: "apps",
  services: "services",
  education: "education",
  awards: "awards",
  contact: "contact"
};

const inferIcon = (item) => {
  const text = `${item.icon || ""} ${item.label || ""} ${item.title || ""} ${item.url || ""}`.toLowerCase();
  if (item.icon) return item.icon;
  if (text.includes("mail") || text.includes("email")) return "email";
  if (text.includes("github")) return "github";
  if (text.includes("blog")) return "blog";
  if (text.includes("orcid")) return "orcid";
  if (text.includes("dblp")) return "dblp";
  if (text.includes("researchgate")) return "researchgate";
  if (text.includes("lab")) return "lab";
  if (text.includes("scholar")) return "scholar";
  if (text.includes("cv")) return "cv";
  return "link";
};

const createLink = (item, className) => {
  const link = document.createElement("a");
  const rawUrl = item.url || "#";
  const href = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawUrl) ? `mailto:${rawUrl}` : rawUrl;
  link.href = href;
  link.textContent = item.label || item.linkText || item.value || item.title;
  if (className) link.className = className;
  if (href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
};

const appendInlineContent = (element, text) => {
  const pattern = /(\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+|#[^)\s]*)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      element.append(document.createTextNode(text.slice(lastIndex, match.index)));
    }

    if (match[2] && match[3]) {
      const link = document.createElement("a");
      link.href = match[3];
      link.textContent = match[2];
      if (match[3].startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      element.append(link);
    } else {
      const strong = document.createElement("strong");
      strong.textContent = match[4];
      element.append(strong);
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    element.append(document.createTextNode(text.slice(lastIndex)));
  }
};

const appendHighlightedAuthors = (element, authors) => {
  const pattern = /(Jun Shi|石军)/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(authors)) !== null) {
    if (match.index > lastIndex) {
      element.append(document.createTextNode(authors.slice(lastIndex, match.index)));
    }

    const strong = document.createElement("strong");
    strong.className = "self-author";
    strong.textContent = match[0];
    element.append(strong);
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < authors.length) {
    element.append(document.createTextNode(authors.slice(lastIndex)));
  }
};

const createToggleIcon = () => {
  const span = document.createElement("span");
  span.className = "toggle-mark";
  span.textContent = "+";
  return span;
};

const renderParagraphs = (container, paragraphs) => {
  container.replaceChildren(
    ...(paragraphs || []).map((text) => {
      const paragraph = document.createElement("p");
      appendInlineContent(paragraph, text);
      return paragraph;
    })
  );
};

const renderNav = () => {
  const nav = document.querySelector("[data-nav]");
  nav.replaceChildren(
    ...getContent().nav.map((item) => {
      const link = document.createElement("a");
      link.href = item.href;
      if (item.icon) link.append(createIcon(item.icon, "nav-icon"));
      link.append(document.createTextNode(item.label));
      return link;
    })
  );
};

const renderProfileLinks = (container, items) => {
  container.replaceChildren(
    ...items.map((item) => {
      const link = createLink(item);
      link.className = "profile-link";
      link.prepend(createIcon(inferIcon(item), "link-icon"));
      return link;
    })
  );
};

const renderNews = (container, items) => {
  const groups = items.reduce((result, item) => {
    const year = String(item.year || item.date || "To update").slice(0, 4);
    if (!result.has(year)) result.set(year, []);
    result.get(year).push(item);
    return result;
  }, new Map());

  container.replaceChildren(
    ...Array.from(groups.entries()).map(([year, groupItems], index) => {
      const group = document.createElement("details");
      const summary = document.createElement("summary");
      const titleWrap = document.createElement("span");
      const title = document.createElement("h3");
      const meta = document.createElement("span");
      const list = document.createElement("ul");

      group.className = "news-group";
      group.open = index === 0;
      summary.className = "module-summary";
      titleWrap.className = "module-title";
      meta.className = "group-meta";
      list.className = "news-year-list";
      title.textContent = year;
      meta.textContent = `${groupItems.length} ${groupItems.length === 1 ? "item" : "items"}`;

      list.replaceChildren(
        ...groupItems.map((item) => {
          const row = document.createElement("li");
          const date = document.createElement("span");
          const text = document.createElement("span");
          const icon = document.createElement("span");
          date.className = "news-date";
          icon.className = "news-bullhorn";
          date.textContent = item.date;
          icon.textContent = "📣";
          text.textContent = item.text;
          row.append(date, icon, text);
          return row;
        })
      );

      titleWrap.append(createIcon("news", "module-icon"), title);
      summary.append(titleWrap, meta, createToggleIcon());
      group.append(summary, list);
      return group;
    })
  );
};

const renderResearch = (container, items) => {
  container.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("article");
      const titleWrap = document.createElement("span");
      const title = document.createElement("strong");
      const description = document.createElement("p");
      const chips = document.createElement("div");
      const bullets = document.createElement("ul");

      row.className = "research-module";
      titleWrap.className = "module-title";
      description.className = "module-description";
      chips.className = "keyword-row";
      bullets.className = "module-points";

      title.textContent = item.title;
      titleWrap.append(createIcon(item.icon || "research", "module-icon"), title);
      description.textContent = item.description || "";

      (item.keywords || []).forEach((keyword) => {
        const chip = document.createElement("span");
        chip.textContent = keyword;
        chips.append(chip);
      });

      (item.points || item.bullets || []).forEach((point) => {
        const bullet = document.createElement("li");
        bullet.textContent = point;
        bullets.append(bullet);
      });

      row.append(titleWrap, description);
      if (chips.children.length) row.append(chips);
      if (bullets.children.length) row.append(bullets);
      return row;
    })
  );
};

const renderPublications = (container, groups) => {
  container.replaceChildren(
    ...groups.map((group, index) => {
      const section = document.createElement("details");
      const summary = document.createElement("summary");
      const titleWrap = document.createElement("span");
      const heading = document.createElement("h3");
      const meta = document.createElement("span");
      const list = document.createElement("ol");
      const count = group.items.length;

      section.className = "publication-group";
      section.open = group.open ?? index === 0;
      summary.className = "module-summary";
      titleWrap.className = "module-title";
      list.className = "publication-list";
      meta.className = "group-meta";
      heading.textContent = group.group;
      meta.textContent = `${count} ${count === 1 ? "item" : "items"}`;

      list.replaceChildren(
        ...group.items.map((item) => {
          const row = document.createElement("li");
          const body = document.createElement("div");
          const topLine = document.createElement("div");
          const tag = document.createElement("span");
          const title = document.createElement("strong");
          const links = document.createElement("span");

          row.className = "publication-item";
          body.className = "publication-body";
          topLine.className = "publication-topline";
          tag.className = "pub-tag";
          tag.textContent = `[${item.tag}]`;
          title.textContent = item.title;
          links.className = "pub-links";
          links.replaceChildren(...(item.links || []).map((link) => createLink(link, "text-link")));

          topLine.append(tag, title, links);
          body.append(topLine);
          appendHighlightedAuthors(body, item.authors);
          body.append(document.createTextNode(`. ${item.venue}, ${item.year}.`));
          row.append(body);
          return row;
        })
      );

      titleWrap.append(createIcon(group.icon || "publications", "module-icon"), heading);
      summary.append(titleWrap, meta, createToggleIcon());
      section.append(summary, list);
      return section;
    })
  );
};

const renderCards = (container, items, className) => {
  container.replaceChildren(
    ...items.map((item) => {
      const article = document.createElement("article");
      const heading = document.createElement("div");
      const icon = createIcon(item.icon || (className === "app-item" ? "apps" : "projects"), "card-icon");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const link = createLink(item);
      title.textContent = item.title;
      description.textContent = item.description;
      link.className = "card-link";
      article.className = className;
      link.prepend(createIcon("external", "inline-icon"));
      heading.className = "card-heading";
      heading.append(icon, title);
      article.append(heading, description, link);
      return article;
    })
  );
};

const renderTimeline = (container, items) => {
  container.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("li");
      const time = document.createElement("span");
      const body = document.createElement("div");
      const title = document.createElement("strong");
      const description = document.createElement("p");

      time.className = "timeline-time";
      time.textContent = item.time;
      title.textContent = item.title;
      description.textContent = item.description;
      body.append(title, description);
      row.append(time, body);
      return row;
    })
  );
};

const renderSimpleList = (container, items) => {
  container.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("li");
      if (typeof item === "string") {
        row.textContent = item;
      } else {
        const title = document.createElement("strong");
        const description = document.createElement("span");
        title.textContent = item.title;
        description.textContent = item.description ? ` ${item.description}` : "";
        row.append(title, description);
      }
      return row;
    })
  );
};

const renderContact = (container, items) => {
  container.replaceChildren(
    ...items.flatMap((item) => {
      const term = document.createElement("dt");
      const detail = document.createElement("dd");
      term.textContent = item.label;
      detail.append(item.url ? createLink(item) : document.createTextNode(item.value));
      return [term, detail];
    })
  );
};

const renderers = {
  links: renderProfileLinks,
  news: renderNews,
  research: renderResearch,
  publications: renderPublications,
  projects: renderSimpleList,
  apps: (container, items) => renderCards(container, items, "app-item"),
  services: renderSimpleList,
  education: renderTimeline,
  awards: renderSimpleList,
  contact: renderContact
};

const applyTheme = () => {
  const theme = config.themes.find((item) => item.id === state.theme) || config.themes[0];
  document.querySelector("#theme-style").href = theme.file;
  document.documentElement.dataset.theme = theme.id;
  localStorage.setItem("site-theme", theme.id);
};

const renderThemeOptions = () => {
  const select = document.querySelector("[data-theme-select]");
  select.replaceChildren(
    ...config.themes.map((theme) => {
      const option = document.createElement("option");
      option.value = theme.id;
      option.textContent = theme.label;
      option.selected = theme.id === state.theme;
      return option;
    })
  );
};

const renderLanguageButton = () => {
  const button = document.querySelector("[data-lang-toggle]");
  button.textContent = state.language === "zh" ? "English" : "中文";
  button.setAttribute("aria-label", state.language === "zh" ? "Switch to English" : "切换到中文");
};

const renderPage = () => {
  const content = getContent();
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = `${content.profile.name} | Academic Homepage`;
  document.querySelector("meta[name='description']").content = content.hero.summary[0];

  renderNav();
  renderLanguageButton();

  document.querySelectorAll("[data-text]").forEach((element) => {
    const value = getValue(element.dataset.text);
    if (value !== undefined && value !== null) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-last-updated]").forEach((element) => {
    element.textContent = getLastUpdatedDate();
  });

  document.querySelectorAll("[data-label]").forEach((element) => {
    const key = element.dataset.label;
    element.replaceChildren(createIcon(sectionIcons[key] || "link", "section-icon"));
    element.append(document.createTextNode(content.labels[key] || ""));
    if (content.notes && content.notes[key]) {
      const note = document.createElement("span");
      note.className = "section-note";
      note.textContent = content.notes[key];
      element.append(note);
    }
  });

  document.querySelectorAll("[data-paragraphs]").forEach((element) => {
    renderParagraphs(element, getValue(element.dataset.paragraphs));
  });

  document.querySelectorAll("[data-src]").forEach((element) => {
    element.src = getValue(element.dataset.src) || config.assets.avatar;
  });

  document.querySelectorAll("[data-alt]").forEach((element) => {
    element.alt = getValue(element.dataset.alt) || "";
  });

  document.querySelectorAll("[data-list]").forEach((element) => {
    const key = element.dataset.list;
    renderers[key](element, content[key] || []);
  });
};

document.querySelector("[data-lang-toggle]").addEventListener("click", () => {
  state.language = state.language === "zh" ? "en" : "zh";
  renderPage();
});

document.querySelector("[data-theme-select]").addEventListener("change", (event) => {
  state.theme = event.target.value;
  applyTheme();
});

renderThemeOptions();
applyTheme();
renderPage();
watchVisitStats();
