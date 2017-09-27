# About senbenito's portfolio
This repoistory started life as a 15-minute warmup during my [Web Development Immersive at Galvanize, Boulder](https://www.galvanize.com/boulder/web-development "Galvanize Boulder shoutout").
##### Learn more about my time @ Galvanize: [const senbenito = { ... g[49].16 }](https://talent.galvanize.com/students/1556 "Galvanize Talent link")

Originally intended as a simple listing of select, deployed projects, this portfolio will be used to document my on-going developer development as I learn and apply new technologies.

## Step 1: a front-end...
I selected [React.js](https://facebook.github.io/react/) because:
1. it was the most-recent framework we studied
2. I loved developing our cross-cohort React hackathon app: [Gela.To](https://github.com/lerning/gelato)
3. there were a number of on-campus resources proficient in React
4. it's the 'new cool'
5. [create-react-app](https://www.npmjs.com/package/create-react-app)

At this point, React is probably overkill to display a few iframes, but I am a fan of the [Polymorphism Principle of Object-Oriented Programming (POOP) (and its dependency Inheritance)](https://stackoverflow.com/a/27642444 "Travis J on StackOverflow") and React embodies this ability of object-oriented languages like Javascript to instantiate new Object classes / "children" / component by extending an original / "parent" / app Object ensuring plug&play component compatability (kinda like my old NES but fixing problems with React console instead of blowing on cartridges). So I can find amazing NPM modules that someone else has created and wire them up to extend my portfolio's functionality - cool!!

Those [`<iframes>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "refer to the MDN docs") tho... I recognized the power of a simple <iframe> during that [React-a-thon](https://github.com/lerning/gelato) - you can just supply a URI with API key as the src - so I wanted to bring them in here. Who knows, we may find future advances replacing the <iframes> but for now, I like their simplicity and literal window into another world...

At this point, we have a simple front-end, so let's deploy to [Surge](http://surge.sh/) for a quick preview: [senbenito's portfolio](http://senbenito-portfolio.surge.sh/ "basic front-end on surge.sh"). This was a super-simple deployment thanks to create-react-app's `yarn build` command. Just `surge` in the `build` directory and **POOF!** ... *website*.

## Step 2: let's get dynamic!
I knew I wasn't done making websites and wanting to show them off. Rather than manually add in a new <iframe> each time I make a new site to rebuild and redeploy, I took a lesson from my [Serene MVP](https://github.com/adam-serene/serene-mvp) Google Map integration and decided to query a [Knex.js](http://knexjs.org/) [PostgreSQL](https://www.postgresql.org/) database via a RESTful [Express.js](https://expressjs.com/) server. This way, I can just [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) a data array of submitted websites into those beloved `<iframes>`.

Here's the [personal-server](https://github.com/senbenito/personal-server) repo to dive into this crucial step.

HOLD ON! Someone else could Post to my website database, so let's bring in some basic authentication via [BcryptJS](https://www.npmjs.com/package/bcryptjs) and allow user persistence via [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken).
_note: I started out with Bcrypt, but ELF header errors plagued my Heroku build, so I finally found BcryptJS which is slower... but works!_

Way back on my Q1 Project, [Eatertain.Me](http://eatertain_me.surge.sh/), I had a [chicken GIF](https://captaintoog.deviantart.com/) easter egg that would display chicken recipes. It became a "thing" that we'd sneak the chicken into our quarterly projects [Family Hub: add 'chicken' to grocery list and mark it done](https://familyhub.herokuapp.com/), [ReZact Hunter: click on Difficulty Level bar to face Chicken Boss](https://github.com/zpassarelli/rezact-hunter), [Serene: click the chicken icon to view chicken restaurants](https://serene-green.herokuapp.com/chickenplaces) - so in ode to my friends-forever from g[49], my login bar is accessed by clicking the chicken.

At this point, I'm loving Polymorphism because I've just added some serious backend functionality with a few NPM packages; rock on modularity!!!
