#!/bin/bash
chromedriver_path=./selenium/chromedriver
selenium_path=./selenium/selenium-server-standalone.jar

java -jar $selenium_path -Dwebdriver.chrome.driver=$chromedriver_path "$@"
