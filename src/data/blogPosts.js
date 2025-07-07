export const blogPosts = [
  {
    id: 1,
    title: "Why I Chose My Tech Stack: React, Vite, and Tailwind CSS",
    date: "December 10, 2024",
    preview: "A look into the reasons behind my technology choices for building modern web apps.",
    content: `# Why I Chose My Tech Stack: React, Vite, and Tailwind CSS

Let’s be real—picking a tech stack can feel overwhelming. For my portfolio and most of my projects, I went with **React**, **Vite**, and **Tailwind CSS**. Here’s my (very honest) take on why:

## React
React just makes sense to me. Building stuff out of components is like playing with LEGOs, and the community is huge—so if I get stuck, someone’s probably already solved it. Hooks and Context? Super handy for keeping things organized.

## Vite
Vite is ridiculously fast. I used to wait forever for things to reload, but with Vite, it’s basically instant. It uses modern web tech under the hood, so I spend less time waiting and more time actually building cool things.

## Tailwind CSS
I used to write a ton of custom CSS, but Tailwind changed the game. I can style things right in my JSX, and it always looks good. Plus, it’s easy to make stuff responsive without a headache.

## Other Tools
Sometimes I’ll throw in **TypeScript** (because catching bugs early is nice). For backends, I almost always use **Supabase**—it’s just so much quicker to set up and get going. I only reach for **MongoDB** if I really need something super flexible or want to try something different, but honestly, Supabase covers most of what I need these days.

## Conclusion
This stack lets me build fast, good-looking apps without losing my mind. If you’re starting something new, give these a shot—they might just make your life easier!`
  },
  {
    id: 2,
    title: "Why I Love PWAs (Progressive Web Apps)",
    date: "June 20, 2025",
    preview: "PWAs are the best of both worlds: web and native. Here’s why I’m a big fan.",
    content: `# Why I Love PWAs (Progressive Web Apps)

Let’s talk about PWAs—Progressive Web Apps. If you haven’t built one yet, you’re missing out! Here’s why I think they’re awesome:

## They Work Everywhere
PWAs run in your browser, but you can also install them on your phone or desktop. No app store drama, no waiting for approvals. Just click “Add to Home Screen” and boom, it’s like a real app.

## Offline? No Problem
Thanks to service workers, PWAs can work even when you’re offline (or your WiFi is being weird). That’s a game-changer for users who want things to “just work.”

## Fast and Lightweight
PWAs load super fast and don’t take up much space. No giant downloads or endless updates—just quick, smooth experiences.

## Push Notifications
You can send push notifications with PWAs, just like native apps. It’s a great way to keep users in the loop without building a separate mobile app.

## Easy Updates
Since PWAs are web-based, updates are instant. No need to wait for users to download the latest version—they always get the newest features right away.

## But… Not Everything’s Perfect
PWAs are awesome, but they’re not magic. Some features (like super-deep system access or certain background tasks) just aren’t possible on every device or browser. iOS support can be a little behind, and you might run into weird quirks depending on the platform. Also, if you need your app in the official app stores, you’ll still have to jump through those hoops.

## Conclusion
PWAs give you the power of native apps with the simplicity of the web. If you want your app to reach more people and work everywhere, give PWAs a try. I’m hooked!`
  },
  {
    id: 3,
    title: "Why Supabase Makes My Life Easier",
    date: "May 30, 2025",
    preview: "Supabase is my go-to for backends. Here’s why I keep coming back to it.",
    content: `# Why Supabase Makes My Life Easier

Let’s be honest: setting up a backend used to be a pain. Then I found Supabase, and now I barely think about it. Here’s why I’m a fan:

## Instant Database (and More)
With Supabase, you get a full Postgres database in seconds. No complicated setup, no weird configs—just sign up and go. Plus, you get authentication, storage, and real-time updates out of the box. I’ve spun up projects in a single afternoon, and it just works.

## Works Great with React
Supabase’s client libraries make it super easy to plug into my React apps. Fetching data, handling auth, and even listening for real-time changes is a breeze. I love how I can use hooks and async/await with their API—makes everything feel modern and smooth.

## The Dashboard is a Lifesaver
The Supabase dashboard is honestly one of my favorite parts. You can manage your tables, run SQL queries, and even test out your APIs right from the browser. It’s perfect for quick tweaks or debugging without having to dig through a terminal.

## Real-World Use Cases
I’ve used Supabase for everything from simple to-do apps to more complex dashboards. It’s great for MVPs, hackathons, or even production apps if you don’t want to deal with DevOps headaches. The real-time features are awesome for chat apps or live data feeds.

## Migrating from Firebase
If you’ve ever used Firebase, Supabase will feel familiar—but with SQL and open source vibes. I actually migrated a small project from Firebase to Supabase and found the process pretty painless. Plus, I like having my data in a real Postgres database.

## Generous Free Tier
I love that I can build and test projects without worrying about costs. The free tier is actually useful, not just a demo. You get enough resources to build something real before you ever have to think about upgrading.

## Open Source Vibes
Supabase is open source, which means I can peek under the hood or even self-host if I want. It feels good to support a project that’s transparent and community-driven.

## Tips for Getting Started
- Check out the Supabase docs—they’re pretty solid and have lots of examples.
- Use the dashboard to experiment with your database and API before writing code.
- Try out the auth features—they’re super easy to set up for email/password or social logins.

## Any Downsides?
Nothing’s perfect! Sometimes the docs are a little behind, and if you need super-advanced features, you might have to dig a bit. Also, if you’re doing something really custom, you might hit a wall. But for most projects, it just works.

## Conclusion
If you want to skip the backend headaches and get straight to building, give Supabase a try. It’s made my dev life way easier!`
  },
  {
    id: 4,
    title: "What I Learned as a Roblox Game Developer",
    date: "December 10, 2024",
    preview: "Building games on Roblox taught me way more than just scripting. Here’s what stuck with me.",
    content: `# What I Learned as a Roblox Game Developer

Before I got into web dev, I spent a good chunk of time making games on Roblox. It was wild, fun, and honestly taught me a ton about coding, teamwork, and creativity. Here’s what I took away from the experience:

## Scripting in Lua
Roblox uses Lua for scripting, and it was my first real programming language. I learned how to make things move, interact, and even build simple AI. Debugging scripts at 2am? Been there, done that.

## Game Design on a Budget
Roblox is all about working with what you’ve got. I had to get creative with limited assets and tools, which made me a better problem solver. Sometimes the best features came from happy accidents or weird workarounds.

## Community & Collaboration
I wasn’t just building games alone—I worked with other devs, artists, and even players. We’d brainstorm ideas, test new features, and sometimes argue about the best way to do things. It taught me how to give and take feedback, and how much better a project can be when everyone’s involved.

## Shipping Fast (and Breaking Things)
On Roblox, you can update your game instantly. I got used to shipping updates quickly, fixing bugs on the fly, and learning from player feedback. It’s a lot like modern web dev—iterate fast, don’t be afraid to break stuff, and always listen to your users.

## Monetization & Analytics
Roblox has its own economy, so I learned about in-game purchases, balancing fun with monetization, and even checking analytics to see what players liked (or didn’t). It was my first taste of building something people actually paid for.

## Freelancing on Roblox
While I was building my own games, I also did some freelancing—helping other creators with scripting, bug fixes, or even designing whole game systems. Working with clients taught me how to communicate clearly, manage expectations, and deliver on deadlines (even if those deadlines were sometimes a little wild). It was a crash course in real-world problem solving and made me way more confident in my skills.

## Why It Still Matters
Even though I’m focused on web apps now, the lessons from Roblox stick with me. Whether it’s rapid prototyping, working with a team, or just having fun with code, those early days made me a better developer.

If you’re thinking about making games (or just want to learn to code), Roblox is a great place to start. Who knows where it’ll take you!`
  },
  {
    id: 5,
    title: "My Brief Adventure as a CDO at a Roblox Startup",
    date: "January 18, 2025",
    preview: "I took on the role of Chief Development Officer at a Roblox-focused startup. It didn’t last long, but I learned a lot!",
    content: `# My Brief Adventure as a CDO at a Roblox Startup

So, here’s a fun story: for a short while, I was the Chief Development Officer (CDO) at a Roblox-focused startup. I actually started out as the lead developer, but thanks to a sudden staff shortage, I got promoted to CDO in just about a month! One day I was building games and freelancing, and the next I was helping lead a team, planning big features, and trying to turn ideas into reality.

## Wearing a Lot of Hats
Startups move fast, and everyone does a bit of everything. Besides leading the dev team, I even had to design a website for the company—definitely outside my usual comfort zone, but a great learning experience! I found myself juggling project management, technical decisions, and even some business strategy. It was a crash course in leadership and communication.

## The Reality Check
As exciting as it was, things didn’t go as planned. The startup stalled out pretty quickly—funding issues, shifting priorities, and the usual startup chaos. It was disappointing, but honestly, not uncommon in the tech world.

## What I Learned
Even though it was short-lived, I picked up a ton: how to organize a team, set priorities, and keep everyone motivated (even when things get tough). I also learned that sometimes, things just don’t work out—and that’s okay. Every experience adds up.

## Startup Drama (Because There’s Always Some)
Of course, it wouldn’t be a startup without a little drama. There were disagreements about direction, last-minute pivots, and the occasional communication breakdown. It was stressful at times, but I learned a lot about staying calm, listening to everyone’s perspective, and trying to keep the team moving forward even when things got messy.

## Looking Back
Would I do it again? Absolutely. Even a short adventure can teach you a lot about yourself and the industry. If you ever get the chance to help lead something new, go for it—you never know what you’ll learn!`
  },
  {
    id: 6,
    title: "Building BMO Box: A Roblox Studio Adventure with a Friend",
    date: "March 5, 2025",
    preview: "How teaming up with a friend to create BMO Box taught me about collaboration, creativity, and having fun with code.",
    content: `# Building BMO Box: A Roblox Studio Adventure with a Friend

One of my favorite memories from my Roblox days was starting a little game studio called **BMO Box** with a friend. We didn’t have a big plan—just a shared love for making games and a lot of late-night brainstorming sessions.

## Teamwork Makes the Dream Work
Working with a friend meant we could bounce ideas off each other, split up the work, and keep each other motivated. At BMO Box, I was the main programmer, handling all the scripting and game logic, while my friend focused on modeling and building the maps. We learned how to play to each other’s strengths and really made a great team.

## Learning as We Go
Neither of us had run a studio before, so there was a lot of trial and error. We figured out how to organize our projects, use version control (eventually!), and even set up a simple workflow for testing and releasing updates.

## The Fun (and the Fails)
Not everything went smoothly—sometimes our ideas were a little too ambitious, or we’d get sidetracked by new features. But honestly, the best part was just building together, laughing at our mistakes, and seeing our games come to life.

## What I Took Away
Starting a studio—even a tiny one—taught me a ton about collaboration, communication, and sticking with a project. Plus, it made game development way more fun.

If you’re thinking about teaming up with someone to build something, go for it! You’ll learn a lot, and you might just make some awesome memories along the way.`
  },
  {
    id: 7,
    title: "Why I Transitioned from Game Development to Web Development",
    date: "June 15, 2024",
    preview: "How I went from building games on Roblox to creating web apps—and why it was the right move for me.",
    content: `# Why I Transitioned from Game Development to Web Development

For a long time, I was all about making games—especially on Roblox. But eventually, I found myself drawn to web development. Here’s why I made the switch:

## Chasing New Challenges
Game development is awesome, but after a while, I wanted to try something different. Web dev felt like a whole new world to explore, with its own set of tools, frameworks, and creative possibilities.

## More Opportunities
I noticed there were way more opportunities in web development—freelance gigs, startups, and even remote jobs. It felt like a space where I could grow my skills and career in new directions.

## Building for Everyone
With web apps, I could build things that anyone could use, on any device, without needing to download anything. That reach was super appealing to me.

## Transferable Skills
A lot of what I learned in game dev—problem solving, teamwork, rapid prototyping—carried over to web dev. The transition wasn’t as scary as I thought!

## Still Love Games
Don’t get me wrong, I still love games and game dev. But right now, web development is where I’m having the most fun and making the biggest impact.

If you’re thinking about switching things up, go for it! You never know what you’ll discover until you try.`
  },
  {
    id: 8,
    title: "My Recent Journey with Unity: From Curiosity to Creation",
    date: "July 1, 2025",
    preview: "How diving into Unity opened up new creative possibilities and challenged my coding skills.",
    content: `# My Recent Journey with Unity: From Curiosity to Creation

After years of working with Roblox and web development, I decided to finally give Unity a real shot. Here’s what the experience has been like so far:

## Why Unity?
Honestly, the main reason I tried Unity was because a friend of mine wanted to make a game using it and asked me to help out. I’d always heard about Unity’s power for both 2D and 3D games, and I was curious to see how it compared to what I’d used before. Plus, the huge community and asset store made it super appealing.

## The Learning Curve
Switching to C# and Unity’s workflow was a bit of a challenge at first. There’s a lot to take in—scenes, prefabs, components—but once I got the hang of it, things started to click. YouTube tutorials and the Unity docs were lifesavers!

## Favorite Features
I love how visual everything is in Unity. Being able to drag, drop, and tweak things in real time is awesome. The physics engine and built-in tools for animation and UI made prototyping ideas way faster than I expected.

## What I’ve Built
So far, I’ve made a few small games and prototypes—nothing huge yet, but each project has taught me something new. I’m excited to keep pushing myself and maybe tackle a bigger project soon.

## Looking Ahead
Unity’s opened up a whole new world of creative possibilities for me. If you’re thinking about trying it, go for it! It’s challenging, but super rewarding.

Stay tuned—there’s more to come!`
  },
];