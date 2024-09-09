// script.js

document.querySelectorAll('.subject-item').forEach(item => {
    item.addEventListener('click', function() {
      const subject = this.textContent;
  
      // Exibir as seções de conteúdo, vídeos e calendário
      document.querySelector('.content').style.display = 'block';
      document.querySelector('#videoSection').style.display = 'block';
      document.querySelector('#dateSearchSection').style.display = 'block';
  
      // Atualizar o título da matéria
      document.getElementById('selectedSubject').textContent = `Mais Informações sobre ${subject}`;
      document.getElementById('videoSubjectTitle').textContent = subject;
  
      // Inserir vídeos relevantes ao assunto selecionado
      displayYouTubeVideos(subject);
    });
  });
  
// ... seu código existente ...

function showSections(subject) {
    // Limpar a classe de qualquer seção que esteja visível
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
  
    // Exibir a seção de conteúdo
    document.getElementById('contentSection').classList.add('active');
  
    // Exibir a seção de vídeos
    const videoSection = document.getElementById('videoSection');
    videoSection.classList.add('active');
  
    // Verificar se há vídeos para a matéria
    const videos = getVideosForSubject(subject);
    if (videos.length === 0) {
      videoSection.innerHTML = '<p>Nenhum vídeo encontrado para essa matéria.</p>';
    } else {
      // ... código para exibir os vídeos ...
    }
  
    // Exibir a seção de busca por data
    // ... código para exibir a seção de busca por data ...
  }
  
  // CSS
  .section {
    display: none;
  }
  
  .active {
    display: block;
  }

  function displayYouTubeVideos(subject) {
    console.log(`Displaying YouTube videos for ${subject}`);
  
    const videoGrid = document.getElementById('youtubeVideos');
    videoGrid.innerHTML = ''; // Limpar vídeos anteriores
  
    // Adicionar vídeos de exemplo para a matéria
    const videos = getVideosForSubject(subject);
    videos.forEach(videoId => {
      const videoItem = document.createElement('div');
      videoItem.className = 'video-item';
      videoItem.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
      videoGrid.appendChild(videoItem);
    });
  }
  
  function getVideosForSubject(subject) {
    const subjectsVideos = {
      'Geografia': ['y2Wz4pfbsrU', 'HCTWYrr5KhE', 'N6Sz_wWPL0k'],
      'Matemática': ['https://youtu.be/v0Yj0JWs-h4?feature=shared', 'v9CqOx-3nY8', 'gzRZmsjEnLg'],
      'História': ['wbdgr69NCKk', '9UnF0YkAT54', 'Z3BZtFKn8d8'],
      // Outras matérias aqui
    };
  
    return subjectsVideos[subject] || [];
  }