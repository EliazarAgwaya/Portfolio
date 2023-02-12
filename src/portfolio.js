const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/EliazarAgwaya/Portfolio',
    title: 'Eliazar.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Eliazar Agwaya',
    role: 'Full Stack Web Developer',
    description:
      "My name's Eliazar Agwaya. I'm a web designer and developer based in Nairobi, Kenya. I am a junior full stack developer who is working towards being a senior developer. Am also a motion graphics designer and a graphics designer.",
    social: {
      linkedin: 'https://www.linkedin.com/in/eliazar-magero/',
      github: 'https://github.com/EliazarAgwaya',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Lost & Found Document Recovery',
      description:
        'The app gives a way of accessing lost documents and one uses his/her credentials to reclaim the lost document',
      stack: ['JavaScript', 'CSS', 'HTML'],
      sourceCode: 'https://github.com/EliazarAgwaya/Lost_and_found_Recovery_System',
      livePreview: 'https://eliazaragwaya.github.io/Lost_and_found_Recovery_System/',
    },
  
    {
      name: 'Trending tech display',
      description:
        'This app provides a way to display the trends in technology, one can see the trends, add a trend and also add likes to a particular trend',
      stack: ['React', 'CSS', 'HTML'],
      sourceCode: 'https://github.com/EliazarAgwaya/Trending-Tech-Display',
      livePreview: 'trendingtechdisplay.netlify.app/',
    },
    {
      name: 'Study Material Tracer',
      description:
        'The app just traces the study materials for personal use. One can comment on a particular material, can add a material, can delete and also add likes',
      stack: ['HTML', 'CSS', 'React', "Ruby"],
      sourceCode: 'https://github.com/EliazarAgwaya/Study-Materials-Tracer',
      livePreview: 'study-materials-tracer.vercel.app/',
    },
    {
      name: 'Budget Tracer',
      description:
        'This app keeps track of personal budget. It tracks the spendings, income and balances',
      stack: ['JavaScript', 'HTML', 'CSS'],
      sourceCode: 'https://github.com/EliazarAgwaya/My-Budget-Tracer',
      livePreview: 'https://eliazaragwaya.github.io/My-Budget-Tracer/',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'React',
    'Ruby',
    'Ruby on Rails',
    'Figma',
    'TailwindCSS',
    'Git',
    'Python',
    'PHP',
    'Motion graphics',
    'Graphic Design'
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'eliazaragwaya@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  