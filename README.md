# Hubspot-Modules

# **Paper Container with Search Module**

## **Overview**
This module is a customizable **Paper Container** with integrated search functionality. It includes a title, content area, and a fully functional search bar with styling and behavior defined using **HTML**, **HubL**, **CSS**, and JSON configurations for fields and styles.

---

## **Features**
1. **Content Display:**
   - Supports rich text content and custom HTML through `{{ module.content }}` and `{{ module.richtext_field }}`.
   - Designed for use cases like showcasing documents, articles, or flyers.

2. **Search Functionality:**
   - A fully interactive search form (`hs-search-field__form`) allowing users to query different types of content:
     - Website Pages
     - Blog Posts
     - Knowledge Articles
     - Landing Pages
   - Includes suggestions dropdown for auto-suggested search results.

3. **Customizable Styling:**
   - JSON configuration for **fields** and **styles**, enabling customization such as background colors, borders, text fonts, and button styles directly from the HubSpot editor.

4. **Accessibility:**
   - Includes ARIA attributes for screen readers, ensuring compliance with accessibility standards.

---

## **Code Structure**
### **HTML**
- Defines the container structure with:
  - `div.paper-container`: Main container.
  - `div.paper-content`: For rendering dynamic content.
  - `div.paper-search`: Search bar implementation using HubSpot modules.

### **CSS**
- Includes styles for:
  - Layout (`.paper-container`, `.paper-search`).
  - Search elements (`.hs-search-field`, `.hs-search-field__input`, `.hs-search-field__button`).
  - Autosuggest dropdown results and hover states.

### **JSON**
- **Fields**: Configures search inputs (e.g., labels, placeholders, button text).
- **Styles**: Allows customization of visual properties like colors, spacing, and fonts.

---

## **How to Use**
### **1. Content Configuration**
- Update the module's `title` and `content` fields via HubSpot's editor.

### **2. Search Customization**
- Adjust search results behavior by modifying `results` fields in the JSON:
  - Enable/disable custom search result pages (`use_custom_search_results_template`).
  - Specify content types for search results (e.g., `blog_posts`, `website_pages`).

### **3. Styling Adjustments**
- Use the `Styles` tab in the HubSpot editor to customize:
  - Background colors and borders for containers and buttons.
  - Font size, color, and alignment for text elements.

### **4. Autosuggest Configuration**
- Customize the autosuggest dropdown text and appearance using the `default_text` group in the JSON.

---

## **Notes**
- Ensure the **search results page** in HubSpot is correctly configured to handle search queries.
- For accessibility compliance, verify that all ARIA attributes are accurate and functional.
- For further customization or troubleshooting, consult [HubSpot Knowledge Base](https://knowledge.hubspot.com/articles/kcs_article/cos-general/how-do-i-set-up-a-results-page-for-my-search-field-in-hubspot).

---

## **License**
This module is licensed under [MIT License](LICENSE). Contributions are welcome!
