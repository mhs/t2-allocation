#!/bin/bash
chromedriver_path=./chromedriver
selenium_path=./selenium-server-standalone.jar

java -jar $selenium_path -Dwebdriver.chrome.driver=$chromedriver_path "$@"
