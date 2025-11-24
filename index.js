const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log("Serve is listening at port", port);
});

// Login Page

app.get("/", (req, res) => {
  res.render("LoginPage.ejs");
});

// Login Page

// Home Page

app.get("/service", (req, res) => {
  res.render("HomePage.ejs");
});

// Home Page

// Booking Page

app.get("/booking", (req, res) => {
  res.render("BookingPage.ejs");
});

// Booking Page

// Technician Page

app.get("/technicians", (req, res) => {
  res.render("TechniciansPage.ejs");
});

// Technician Page

// Work Info Page

app.get("/workinfo", (req, res) => {
  res.render("WorkinfoPage.ejs");
});

// Work Info Page

// Payment Page

app.get("/payment", (req, res) => {
  res.render("PaymentPage.ejs");
});

// Payment Page

// Chats Page

app.get("/chats", (req, res) => {
  res.render("ChatsPage.ejs");
});

// Chats Page

// Review Page

app.get("/review", (req, res) => {
  res.render("ReviewPage.ejs");
});

// Review Page

// Unwanterd page

app.use((req, res) => {
  res.status(404).render("UnavailablePage.ejs");
});

// Unwanterd page
