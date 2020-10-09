---
title: Contact
meta_keywords: Contact Us, Mental Awareness, CMHAA, Corporate Mental Health
  Alliance, City Mental Health Alliance, Mental Health, Corporate Mental Health
  Alliance Australia
meta_description: We'd love to hear from you.
banner_title: Contact us. We'd love to hear from you.
banner_description: ""
banner_image: img/contact-overlay-crop-.jpg
banner_right_image: ""
modules:
  - type: separator-line
    padding_top: true
    padding_bottom: true
  - type: form
    form_id: contact
    form_lead: Please let us know how we may assist you and we'll be in touch.
    form_description: Note that we do not provide clinical services for people in
      need of direct mental health or crisis support. If you or someone you know
      is in immediate danger, please dial '000' if in Australia, or reach out to
      the relevant support services listed
      [here](https://everymind.org.au/need-help).
    form_title: Let's connect
    components:
      - type: FC02_text_input_area
        text_field_id: firstname
        text_input_label: First name
        text_input_required: true
        text_field_error_message: Your first name is required.
        text_field_min_char: 2
        text_field_max_char: 100
      - type: FC02_text_input_area
        text_field_id: lastname
        text_input_label: Surname
        text_input_required: true
        text_field_error_message: Your surname is required.
        text_field_min_char: 2
        text_field_max_char: 100
      - type: FC01_email
        email_id: email
        email_label: Email address
        email_required: true
        email_error_message: A valid email address is required.
      - type: FC05_select
        select_required: true
        select_id: options
        select_label: Reason for your enquiry
        select_options:
          - option_id: membership
            option_text: Membership
          - option_id: Program information
            option_text: Program information
          - option_id: Involved
            option_text: Wanting to get involved
          - option_id: General
            option_text: General enquiry
        select_error_message: Please select reason
      - type: FC03_text_area
        text_area_id: message
        text_area_label: Comments
        text_area_required: true
        text_area_error_message: Your comments are required.
        text_area_max_char: 995
  - type: recommended_resources
    heading: Read what some of our leaders have to say about mental health.
    resources:
      - personal-story-brian-long
      - personal-story-andrew-culleton
      - personal-story-deborah-yates
---
