<template>
  <div>
    <h2>Work experience</h2>
    <p>
      In Fall of 2017 and Summer of 2018, I co-oped with Crown Equipment Corporation of New Bremen, OH. Despite being a worldwide corporation, they are stationed in a town of roughly 5000 people! In this town, they develop and manufacture a variety of lift trucks and utilities for warehouse management. I was hired onto an engineering team for the C1515 project, developing touch screen devices on lift trucks. These miniature computers were developed from the ground up with a custom-coded Linux operating system. The department followed a scaled agile framework for development, also known as <a href='https://www.scaledagileframework.com/'>SAFe</a>. This created a fast-paced, organized, productive development cycle.
    </p>
    <p>
      While the work environment was too rigorous for me to be immediately applied to the truck software, I spent most of my time developing engineering utilities to make the development process much smoother...
    </p>
    <p>
      The first tool I worked on was the Gena Truck Download Utility. The program's purpose is to allow for an ease of software installation onto the lift truck, including the hardware. The program had in-depth knowledge of the lift truck's inner workings and required moving files to proper places, initializing scripts, and knowing when to do what. This is an <a href='https://electronjs.org/'>Electron</a> application, using a combination of <a href='https://angularjs.org/'>AngularJS</a> and <a href='http://getbootstrap.com/'>Bootstrap</a> for UI and <a href='https://nodejs.org/en/'>NodeJS</a> for package management and utilities. During my time at Crown, especially in Fall 2017, I was widely developing this program independently while still vastly exceeding the expectations of my peers. I worked to add features, support dependencies, test, and fix bugs. This program is currently being prepared for use with end-customers so they can update their own software with new features as need be.
    </p>
    <p>
      I also moved onto another project my first semester with Crown called the IMM Data Tool. The IMM, or Information Management Module, is the touch screen device that goes onto lift trucks. Despite typically being vastly different, each lift truck type had the same operating system. The difference between them was the data configuration, previously handled through an unmanageable number of CSV and XML files. The purpose of the IMM Data Tool was to alleviate some of this work and handle small details in the background while presenting the necessary data in a nice, user-friendly format. Fittingly, this program was also an <a href='https://electronjs.org/'>Electron</a> and <a href='https://nodejs.org/en/'>NodeJS</a> application, but it uses the vastly different <a href='https://vuejs.org/'>VueJS</a> framework for live data processing and effortless UI development <i>(this website is made with this framework!)</i>. I effectively helped to pioneer this tool alongside a mentor of mine, and the tool is still expanding and being used throughout the engineering department today.
    </p>
    <p>
      In my second semester, I expanded quite a bit into other areas, experimenting with testing types (unit, system, end-to-end, UI) and dabbling in Linux development with C++. I also touched a lot of shell scripting through both of these endeavors, as well as through the Download Utility's interface with the lift truck.
    </p>
    <p>
      It was through these projects that I learned a lot of the engineering world. Obviously, I learned to develop in a fast-paced environment, often needing to manage dependencies and multiple tasks. This vastly boosted my time-management skills and understanding of task priority. As I was often the sole supporter of the Download Utility, I learned how to handle complaints and suggestions for software, aptly allowing me to develop my communications skills and understanding of the end-user. I was shown a lot of new UI design concepts I had never heard of before, such as not impeding habituation, and I'm sure I could aptly apply these to my future positions.
    </p>
  </div>
</template>

<script>
export default { name: 'work-experience' }
</script>
