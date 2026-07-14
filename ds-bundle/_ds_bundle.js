// @ds-bundle global="PhotonDS" pkg="photon-portal@1.0.0" components="12"
var PhotonDS = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ds-src/components.jsx
  var components_exports = {};
  __export(components_exports, {
    Badge: () => Badge,
    BlueprintSection: () => BlueprintSection,
    Button: () => Button,
    Card: () => Card,
    Container: () => Container,
    Eyebrow: () => Eyebrow,
    Field: () => Field,
    IconBadge: () => IconBadge,
    Input: () => Input,
    Label: () => Label,
    Stat: () => Stat,
    Textarea: () => Textarea
  });
  function Button({ variant = "primary", size, as: Tag = "button", children, className = "", ...props }) {
    const cls = ["nb-btn", `nb-btn--${variant}`, size ? `nb-btn--${size}` : null, className].filter(Boolean).join(" ");
    return React.createElement(Tag, { className: cls, ...props }, children);
  }
  function Badge({ variant = "tech", children, className = "", ...props }) {
    const cls = ["nb-badge", `nb-badge--${variant}`, className].filter(Boolean).join(" ");
    return React.createElement("span", { className: cls, ...props }, children);
  }
  function Card({ variant, children, className = "", ...props }) {
    const cls = ["nb-card", variant ? `nb-card--${variant}` : null, className].filter(Boolean).join(" ");
    return React.createElement("div", { className: cls, ...props }, children);
  }
  function IconBadge({ variant, children, className = "", ...props }) {
    const cls = ["nb-icon-badge", variant ? `nb-icon-badge--${variant}` : null, className].filter(Boolean).join(" ");
    return React.createElement("div", { className: cls, ...props }, children);
  }
  function Stat({ value, suffix, label, className = "" }) {
    return React.createElement(
      "div",
      { className: `nb-stat${className ? " " + className : ""}` },
      React.createElement(
        "div",
        { className: "nb-stat__value" },
        value,
        suffix ? React.createElement("span", { className: "nb-stat__suffix" }, suffix) : null
      ),
      React.createElement("div", { className: "nb-stat__label" }, label)
    );
  }
  function Eyebrow({ onInverse, children, className = "", ...props }) {
    const cls = ["nb-eyebrow", onInverse ? "nb-eyebrow--on-inverse" : null, className].filter(Boolean).join(" ");
    return React.createElement("span", { className: cls, ...props }, children);
  }
  function Container({ wide, children, className = "", ...props }) {
    const cls = ["nb-container", wide ? "nb-container--wide" : null, className].filter(Boolean).join(" ");
    return React.createElement("div", { className: cls, ...props }, children);
  }
  function BlueprintSection({ light, children, className = "", style, ...props }) {
    const cls = [light ? "nb-blueprint--light" : "nb-blueprint", className].filter(Boolean).join(" ");
    return React.createElement("section", { className: cls, style, ...props }, children);
  }
  function Label({ children, className = "", ...props }) {
    return React.createElement("label", { className: `nb-label${className ? " " + className : ""}`, ...props }, children);
  }
  function Input({ className = "", ...props }) {
    return React.createElement("input", { className: `nb-input${className ? " " + className : ""}`, ...props });
  }
  function Textarea({ className = "", ...props }) {
    return React.createElement("textarea", { className: `nb-textarea${className ? " " + className : ""}`, ...props });
  }
  function Field({ label, htmlFor, children, className = "" }) {
    return React.createElement(
      "div",
      { className: `nb-field${className ? " " + className : ""}` },
      label ? React.createElement(Label, { htmlFor }, label) : null,
      children
    );
  }
  return __toCommonJS(components_exports);
})();
