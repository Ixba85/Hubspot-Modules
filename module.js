[
 {
  "children": [
   {
    "aliases_mapping": {
     "property_aliases_paths": {
      "field_label": [
       "field_label"
      ]
     }
    },
    "allow_new_line": false,
    "display_width": null,
    "id": "input.field_label",
    "label": "Label text",
    "locked": false,
    "name": "field_label",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "aliases_mapping": {
     "property_aliases_paths": {
      "placeholder": [
       "placeholder"
      ]
     }
    },
    "allow_new_line": false,
    "default": "Search",
    "display_width": null,
    "id": "input.placeholder",
    "label": "Placeholder text",
    "locked": false,
    "name": "placeholder",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   }
  ],
  "display_width": null,
  "expanded": false,
  "group_occurrence_meta": null,
  "id": "input",
  "label": "Search input field",
  "locked": false,
  "name": "input",
  "required": false,
  "tab": "CONTENT",
  "type": "group"
 },
 {
  "children": [
   {
    "default": {
     "name": "search",
     "unicode": "f002",
     "type": "SOLID"
    },
    "display_width": null,
    "icon_set": "fontawesome-5.0.10",
    "id": "button.icon",
    "label": "Icon",
    "locked": false,
    "name": "icon",
    "required": false,
    "type": "icon"
   },
   {
    "allow_new_line": false,
    "display_width": null,
    "id": "button.button_label",
    "label": "Button text",
    "locked": false,
    "name": "button_label",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   }
  ],
  "display_width": null,
  "expanded": false,
  "group_occurrence_meta": null,
  "id": "button",
  "label": "Button",
  "locked": false,
  "name": "button",
  "required": false,
  "tab": "CONTENT",
  "type": "group"
 },
 {
  "children": [
   {
    "default": false,
    "display": "toggle",
    "display_width": null,
    "id": "results.user_custom_search_results_template",
    "inline_help_text": "Turn this setting on to use a custom search results page instead of the default global search results page.",
    "label": "Use custom search results page",
    "locked": false,
    "name": "use_custom_search_results_template",
    "required": false,
    "type": "boolean"
   },
   {
    "display_width": null,
    "id": "results.path_id",
    "inline_help_text": "This is where people will go when they click to search their search term. Make sure to choose a page that contains the search results module.",
    "label": "Search results page",
    "locked": false,
    "name": "path_id",
    "required": false,
    "type": "page",
    "visibility": {
     "controlling_field": "results.user_custom_search_results_template",
     "controlling_value_regex": "true",
     "operator": "EQUAL"
    }
   },
   {
    "children": [
     {
      "aliases_mapping": {
       "property_aliases_paths": {
        "website_pages": [
         "content_types.website_pages"
        ]
       }
      },
      "default": true,
      "display": "checkbox",
      "display_width": null,
      "id": "results.content_types.website_pages",
      "label": "Website pages",
      "locked": false,
      "name": "website_pages",
      "required": false,
      "type": "boolean",
      "visibility": {
       "access": {
        "operator": "HAS_ALL",
        "scopes": [
         "sitepages-access"
        ]
       },
       "operator": "NOT_EMPTY"
      }
     },
     {
      "aliases_mapping": {
       "property_aliases_paths": {
        "landing_pages": [
         "content_types.landing_pages"
        ]
       }
      },
      "default": false,
      "display": "checkbox",
      "display_width": null,
      "id": "results.content_types.landing_pages",
      "label": "Landing pages",
      "locked": false,
      "name": "landing_pages",
      "required": false,
      "type": "boolean"
     },
     {
      "aliases_mapping": {
       "property_aliases_paths": {
        "blog_posts": [
         "content_types.blog_posts"
        ]
       }
      },
      "default": true,
      "display": "checkbox",
      "display_width": null,
      "id": "results.content_types.blog_posts",
      "label": "Blog posts",
      "locked": false,
      "name": "blog_posts",
      "required": false,
      "type": "boolean"
     },
     {
      "aliases_mapping": {
       "property_aliases_paths": {
        "knowledge_articles": [
         "content_types.knowledge_articles"
        ]
       }
      },
      "default": false,
      "display": "checkbox",
      "display_width": null,
      "id": "results.content_types.knowledge_articles",
      "label": "Knowledge articles",
      "locked": false,
      "name": "knowledge_articles",
      "required": false,
      "type": "boolean",
      "visibility": {
       "access": {
        "operator": "HAS_ALL",
        "scopes": [
         "service-knowledge-access"
        ]
       }
      }
     }
    ],
    "default": {
     "use_custom_search_results_template": false
    },
    "display_width": null,
    "expanded": false,
    "group_occurrence_meta": null,
    "id": "results.content_types",
    "label": "Search results include",
    "locked": false,
    "name": "content_types",
    "required": false,
    "tab": "CONTENT",
    "type": "group"
   },
   {
    "display": "text",
    "display_width": null,
    "id": "results.group_id",
    "label": "Group ID",
    "locked": true,
    "name": "group_id",
    "required": false,
    "step": 1,
    "type": "number"
   }
  ],
  "display_width": null,
  "expanded": false,
  "group_occurrence_meta": null,
  "id": "results",
  "label": "Results",
  "locked": false,
  "name": "results",
  "required": false,
  "tab": "CONTENT",
  "type": "group"
 },
 {
  "children": [
   {
    "allow_new_line": false,
    "default": "Results for “[[search_term]]”",
    "display_width": null,
    "id": "default_text.autosuggest_results_message",
    "label": "Autosuggest results message",
    "locked": false,
    "name": "autosuggest_results_message",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "There are no autosuggest results for “[[search_term]]”",
    "display_width": null,
    "id": "default_text.autosuggest_no_results_message",
    "label": "Autosuggest no results message",
    "locked": false,
    "name": "autosuggest_no_results_message",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "There are no suggestions because the search field is empty.",
    "display_width": null,
    "id": "default_text.sr_empty_search_field_message",
    "label": "Screen reader empty search field message",
    "locked": false,
    "name": "sr_empty_search_field_message",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "There are currently [[number_of_results]] auto-suggested results for [[search_term]]. Navigate to the results list by pressing the down arrow key, or press return to search for all results.",
    "display_width": null,
    "id": "default_text.sr_autosuggest_results_message",
    "label": "Screen reader autosuggest results message",
    "locked": false,
    "name": "sr_autosuggest_results_message",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "This is a search field with an auto-suggest feature attached.",
    "display_width": null,
    "id": "default_text.sr_search_field_aria_label",
    "label": "Screen reader search field aria-label",
    "locked": false,
    "name": "sr_search_field_aria_label",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "Search",
    "display_width": null,
    "id": "default_text.sr_search_button_aria_label",
    "label": "Screen reader search button aria-label",
    "locked": false,
    "name": "sr_search_button_aria_label",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "Results for “example search term”",
    "display_width": null,
    "id": "default_text.as_example_search_results",
    "label": "Auto suggest results for example search term",
    "locked": false,
    "name": "as_example_search_results",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "This is where suggested results appear as your visitor types their search term",
    "display_width": null,
    "id": "default_text.as_example_line_1",
    "label": "Auto suggest line 1 for example search term",
    "locked": false,
    "name": "as_example_line_1",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "Here's another suggested search result",
    "display_width": null,
    "id": "default_text.as_example_line_2",
    "label": "Auto suggest line 2 for example search term",
    "locked": false,
    "name": "as_example_line_2",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   },
   {
    "allow_new_line": false,
    "default": "Configure the type of content that appears in your search results using the “search results include” option",
    "display_width": null,
    "id": "default_text.as_example_line_3",
    "label": "Auto suggest line 3 for example search term",
    "locked": false,
    "name": "as_example_line_3",
    "required": false,
    "show_emoji_picker": false,
    "type": "text",
    "validation_regex": ""
   }
  ],
  "display_width": null,
  "expanded": false,
  "group_occurrence_meta": null,
  "id": "default_text",
  "label": "Default text",
  "locked": true,
  "name": "default_text",
  "required": false,
  "tab": "CONTENT",
  "type": "group"
 }
]
