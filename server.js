var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongo = require('mongoose');
var multer = require('multer');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());