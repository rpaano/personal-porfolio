module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key  : '~/.cert/key.cer',
      user : 'ubuntu',
      host : '54.169.42.99',
      ref  : 'origin/main',
      repo : 'git@github.com:rpaano/personal-porfolio.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes',
    }
  }
};
