Registration tool semi automatized (database customization).
Functionalities: 
- create a registration form by steps. 
- Fetch, manage and export data via administration module.

Features: 
- Multilingual
- Custom design
- Email notifications

Technology Stack
Included in this stack are the following technologies:

- Front-end Framework : Angular 4
- Front-end languages : TypeScript, Javascript
- Design Framework: Bootstrap 3
- Design languages: HTML 5, CSS 

- Back-end Framework : Flask
- Back-end language: Python

- Database : MongoDB 



Collections list.

MASTER --> set a new form

*name : xxx 
*template : (red, ballet, blue)
*language :  [fr, es, en]
 menu_level: admin module menu ( 1 = menu , 2 = menu + sub-menu)

STEPS --> set a new step

*step_id : ordered reading sequence of a step
*name: key value name in XXX collection
*master : In MASTER collection key =name
*type : (
  click_selection = buttons list, 
  multi_selection = multi select buttons list, 
  field_panel = list of input fields,
  image_selection = upload file into cloudinary,
  )
