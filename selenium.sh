#!/bin/bash
chromedriver_path=./selenium/chromedriver
java -jar ./selenium/selenium-server-standalone-2.35.0.jar \
  -Dwebdriver.chrome.driver=$chromedriver_path "$@"
