#16:33:50.181 INFO - Executing: [get: http://localhost:9001/#/projects] at URL: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/url)
#16:33:50.861 INFO - Done: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/url
#16:33:50.865 INFO - Executing: [find element: By.selector: .selector span] at URL: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/element)
#16:33:50.947 INFO - Done: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/element
#16:33:50.953 INFO - Executing: [click: 0 [[ChromeDriver: chrome on MAC (ba2ccf05ce9964e1dcd5389c672d40b9)] -> css selector: .selector span]] at URL: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/element/0/click)
#16:33:51.064 INFO - Done: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/element/0/click
#16:33:51.066 INFO - Executing: [execute script:
#    $('.selector input').datepicker('setDate', '06/01/2013');
#    $('.selector input').datepicker('hide');
#    return null;, []] at URL: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/execute)
#16:33:51.111 INFO - Done: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/execute
#16:33:51.114 INFO - Executing: [find elements: By.selector: .project] at URL: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/elements)
#16:33:51.193 INFO - Done: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/elements
#16:33:51.202 INFO - Executing: [find child elements: 2 [[ChromeDriver: chrome on MAC (ba2ccf05ce9964e1dcd5389c672d40b9)] -> css selector: .project], By.selector: .allocationContent] at URL: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/element/2/elements)
#16:33:51.224 INFO - Done: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/element/2/elements
#16:33:51.229 INFO - Executing: [mousemove: 3 false] at URL: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/moveto)
#16:33:51.274 INFO - Done: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/moveto
#16:33:51.278 INFO - Executing: [doubleclick: no args] at URL: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/doubleclick)
#16:33:51.409 INFO - Done: /session/99ef8c2e-c86f-4012-9d32-d614ac272cc6/doubleclick
require 'selenium-webdriver'

driver = Selenium::WebDriver.for :remote, url: 'http://localhost:4444/wd/hub', desired_capabilities: :chrome

driver.navigate.to 'http://localhost:9001/#/projects'

# set current date
element = driver.find_element(:css, '.selector span')
element.click

selector = '.selector input'
driver.execute_script "
    $('#{selector}').datepicker('setDate', '06/01/2013');
    $('#{selector}').datepicker('hide');
    return null;"

allocation = driver.find_elements(:css, '.project')[1].find_elements(:css, '.allocationContent')[0]
driver.action.double_click(allocation).perform
#driver.quit
