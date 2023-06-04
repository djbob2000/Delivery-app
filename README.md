# Test task "Delivery app"

## Technologies

Project is created with:

- React
- Redux Toolkit
- React router
- Redux persist
- Formik
- Yup
- Axios
- @ MUI/@emotion
- Toastify

## Setup

To run this project, install it locally using npm:

```
$ cd ../delivery-app
$ npm install
$ npm start
```

## About task

There are three complexity levels: base, middle and advanced.
The base level is sufficient to pass the test task stage. Still, accomplished tasks with a harder level of complexity will highly increase your chance of getting to the school.

### Description:

The Food Delivery app should consist of two pages:

- the shops page and
- the shopping cart page
  Requirements:
- Important: Add instructions in readme.md file on how to run the application.
- Upload source code to GitHub/BitBucket/GitLab and share a link.
- Host an application in any suitable way and share the URL to access it.
- The front-end part can be done with or without any framework, with any preferred
  design style.
- The back-end part can be done with or without any framework.
  Web application where users can order food delivery

#### Base level:

- The page where users can choose a shop, then add goods to the cart (get data from the database)

Shopping cart page:

- The page where the user can check all added products, remove some of them or change the count. And add an email, a phone number, and an address (in inputs)

- The order should be saved in the database after the user clicks the “submit” button

  #### Middle level:

  Shops page:

- Everything from the base level
- Users can order products only from one shop (for example, if the user chooses
  McDonald's. Then you need to disable other shops.)
  Shopping cart page:
- Everything from the base level

  #### Advanced level:

  Shops page:

- The cart should be saved in local storage.
  - Everything from the middle level
    Shopping cart page:
- Everything from the middle level
- Add google maps
- users can choose their address using a pin on the map or just enter an address and show it will be shown on the map
- show a shop where the user ordered goods from on the map
- \*(extra) show route from shop to user’s address and approximately time
- \*(extra) ask to enter a captcha after clicking on the “Create order” button

  Additioanl ideas for your inspiration:
  Orders history page:

  - users can find their orders on this page using their email and phone number, or order id

#### Coupons page:

- create a page where users can see all coupons (coupons will be used for discounts, users can apply them on the shopping cart page)
