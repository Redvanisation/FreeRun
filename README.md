# FreeRun
FreeRun e-commerce website

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![stars][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Redvanisation/FreeRun">
    <img src="./public/screenshot1.png" alt="Logo" width="860" height="460">
  </a>

  <h2 align="center">FREE RUN</h2>

  <p align="center">
    Full-stack modern e-commerce prototype project, this is the Front-end repo which was developed using ReactJS/Hooks, React Router, Sass, Bulma and PayPal checkout for payments.
    <br />
    <br />
    <a href="https://objective-payne-c9a208.netlify.com/" target="_blank">Live Link</a>
    ·
    <a href="https://github.com/Redvanisation/FreeRun/issues">Report Bug</a>
    ·
    <a href="https://github.com/Redvanisation/FreeRun/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Future Implementations](#future-implementations)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://objective-payne-c9a208.netlify.app/)

This project is a **PROTOTYPE** of a real e-commerce that I have previously developed, it's a full-stack mobile responsive app with a **React** front-end and a **Ruby on Rails API** back-end with **AWS S3** for images' storage via **active storage**, it has a PayPal checkout integration and the cart is saved in the browser's local storage. This is the front-end repo and you could find the back-end code on [https://github.com/Redvanisation/FreeRunAPI](https://github.com/Redvanisation/FreeRunAPI).


### Built With

* [ReactJS](http://reactjs.org/)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [React Router](https://github.com/ReactTraining/react-router)
* [JWT](https://jwt.io/)
* [Sass](https://sass-lang.com/)
* [Bulma](https://bulma.io/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.



### Prerequisites


* npm
```sh
npm install npm@latest -g
```

* yarn
```sh
npm install yarn -g
```



### Installation
 
1. Clone the repo and cd into it
```sh
git clone git@github.com:Redvanisation/FreeRun.git

cd freerun
```
2. Install Yarn packages
```sh
yarn install
```
4. Run the development server with only one of the below commands
```sh
yarn start
```



<!-- USAGE EXAMPLES -->
## Usage

- On the website you will fin a list of products, as a **guest user** clicking on each product will take you to its page which has an **add to cart** button that adds the product to the cart if the stock is more than 0 and the button is visible.
- As a **regular user**(logged in user) by clicking on a product it would take you to its page which would have an additional **add to wishlist** button which would add the product to the user's wishlist where you can view or delete products from it.
- The **admin user** has the ability to add products from the menu bar, as well as updating or removing them (available from every single product's page).
- Once on the cart you can increase or decrease each product's quantity or remove it from the cart, you can also empty the whole cart or pay with the **PayPal checkout** button.
- By clicking the **PayPal checkout** button a window will pop-up that uses **PayPal sandbox** (mocking the real payment features) you can copy/paste the following credentials to test the payment functionality and how the app handles it:
 - PayPal Sandbox Email: `sb-3sfev1297483@personal.example.com`
 - PayPal Sandbox Password: `Vp?7l8an`
- After the payment you will be redirected to the home page and each quantity you bought will be deducted from the product's stock.
- As a **regular user** you will also have the ability to view your previous orders and the history of the purchased products in every order.



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

**Radouane Khiri** - [@redvanisation](https://twitter.com/redvanisation) - [LinkedIn](https://www.linkedin.com/in/redvan/) - redvanisation@gmail.com





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/Redvanisation/FreeRun
[stars-url]: https://github.com/Redvanisation/FreeRun/stargazers
[forks-shield]: https://img.shields.io/github/forks/Redvanisation/FreeRun
[forks-url]: https://github.com/Redvanisation/FreeRun/network/members
[issues-shield]: https://img.shields.io/github/issues/Redvanisation/FreeRun
[issues-url]: https://github.com/Redvanisation/FreeRun/issues
[license-shield]: https://img.shields.io/github/license/Redvanisation/FreeRun
[license-url]: https://github.com/Redvanisation/FreeRun/blob/develop/LICENSE
[product-screenshot]: ./public/screenshot2.png
