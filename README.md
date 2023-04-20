# Cyberdyne Systems
### Mock corporative site as an exam project for Angular course at Softuni. Hosted at <a href="https://cdyne-systems.web.app/">cdyne-systems.web.app</a>

The project consists of 2 parts - public and private.

## Public part
- Landing page with hero section and a few bullets.
- Static "Services" and "Company" pages.
- Register page requiring several fields, complete with validation.
- Login page with forgotten password functionality.

## Private part
After registration, user can access their control panel which provides several functions.

 - My orders and requests dashboard:
      -- User can view their current and past orders.
      -- Download previously uploaded files.
      -- Track order status.
 - Order parts: 
      -- Simple search engine which provides the user a tool to find spare parts by number.
      -- Once found, the part can be ordered and tracked in the "My orders and requests" dashboard.
 - Request support:
      -- Send support request by providing some text information. Fields are validated.
      -- User can upload file.
 - Contact your var: static filler page.
 - Account setting:
      -- User can change email, password, phone number and address.
      -- Password confirmation is required on setting change if user has logged some time ago.
 - Logout of the system.

## Technicalities
  - Angular frontend.
  - Google Firebase backend.
  - Custom validators for password form fields.
  - Usage of angular pipes and guards.
  - Lazy loading of support module.
