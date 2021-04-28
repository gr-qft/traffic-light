# Traffic Light

### General info

- Link to the mockup

https://www.figma.com/file/kRIpfyZQj4LV19qKFpvLtA/New-Dev-Test?node-id=1%3A202

- Link to the live site:

https://traffic-light-six.vercel.app/

- CSS reset and Roboto font are set here:

https://github.com/gr-qft/traffic-light/blob/main/styles/globals.css

- The main component `TrafficLight` is here:

https://github.com/gr-qft/traffic-light/tree/main/components

and it is used here:

https://github.com/gr-qft/traffic-light/blob/main/pages/index.js

- To run the app, pull and run `yarn dev`. The local address is `http://localhost:3000/`.

### Comments

- I would want to clarify what is meant precisely in the problem: _the time of red and green_ should be equal. In the current implementation they are, but I don't know if yellow light should be treated in any specific way. I think a good solution to this issue would be to allow the app to adjust the fraction of the total time that the yellow light takes up.

- It would probably be nice to add transition to the app.
