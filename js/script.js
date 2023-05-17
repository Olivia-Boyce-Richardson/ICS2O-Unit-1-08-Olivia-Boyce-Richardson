// Copyright (c) 2023 Olivia B-R All rights reserved
//
// Created by: Olivia B-R
// Created on: Mar 2023
// This file contains the JS functions for index.html
"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-1-08-Olivia-Boyce-Richardson/sw.js", {
    scope: "/ICS2O-Unit-1-08-Olivia-Boyce-Richardson/",
  })
}

function myButtonClicked() {
  alert("Hello, World!")
}