/* SHOEB ALAM — 26 Cloudinary portfolio videos */
const WORK_MEDIA = {
  voiceover: [
    ['gloss vs matte talking creative .mp4','video'], ['NEXON VOICEOVER.mp4','video'],
    ['Shoeb_Alam_NagpurNews.mp4','video'], ['142 EDITED REVISION.mp4','video'],
    ['147 edited.mp4','video'], ['145 EDITED.mp4','video'], ['2.mp4','video']
  ],
  'trendy edit': [
    ['KAL HOON NA HOON.mp4','video'], ['seltos reel-4.mp4','video'],
    ['Prolift Advanced 01.mp4','video'], ['seltos reel-3.mp4','video'],
    ['mer.mp4','video'], ['BE6 REEL-1.mp4','video'],
    ['KIA SYROS REEL-2.mp4','video'], ['thar reel-2.mp4','video']
  ],
  animation: [
    ['chalra hai.mp4','video'], ['jethalal.mp4','video'], ['summer.mp4','video'],
    ['raani.mp4','video'], ['lee - Copy.mp4','video'], ['0507 (1).mp4','video'], ['5.mp4','video']
  ],
  'motion garphics': [
    ['aditya residency final.mp4','video'], ['MALDINI finall.mp4','video'],
    ['minimal 01.mp4','video'], ['Brands.mov','video']
  ]
};

const CLOUDINARY_VIDEOS = {
  'gloss vs matte talking creative .mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508539/work/voiceover/gloss_vs_matte_talking_creative.mp4',
  'NEXON VOICEOVER.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508536/work/voiceover/NEXON_VOICEOVER.mp4',
  'Shoeb_Alam_NagpurNews.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508527/work/voiceover/Shoeb_Alam_NagpurNews.mp4',
  '142 EDITED REVISION.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508519/work/voiceover/142_EDITED_REVISION.mp4',
  '147 edited.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508480/work/voiceover/147_edited.mp4',
  '145 EDITED.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508465/work/voiceover/145_EDITED.mp4',
  '2.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508442/work/voiceover/2.mp4',
  'KAL HOON NA HOON.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508297/work/trendy%20edit/KAL_HOON_NA_HOON.mp4',
  'seltos reel-4.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508288/work/trendy%20edit/seltos_reel-4.mp4',
  'Prolift Advanced 01.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508198/work/trendy%20edit/Prolift_Advanced_01.mp4',
  'seltos reel-3.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508134/work/trendy%20edit/seltos_reel-3.mp4',
  'mer.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508092/work/trendy%20edit/mer.mp4',
  'BE6 REEL-1.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508070/work/trendy%20edit/BE6_REEL-1.mp4',
  'KIA SYROS REEL-2.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508059/work/trendy%20edit/KIA_SYROS_REEL-2.mp4',
  'thar reel-2.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793507949/work/trendy%20edit/thar_reel-2.mp4',
  'chalra hai.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793507826/work/animation/chalra_hai.mp4',
  'jethalal.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793507800/work/animation/jethalal.mp4',
  'summer.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793507776/work/animation/summer.mp4',
  'raani.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793507757/work/animation/raani.mp4',
  'lee - Copy.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793507747/work/animation/lee_-_Copy.mp4',
  '0507 (1).mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793507740/work/animation/0507_1.mp4',
  '5.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793507737/work/animation/5.mp4',
  'aditya residency final.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508235/work/motion%20garphics/aditya_residency_final.mp4',
  'MALDINI finall.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508201/work/motion%20garphics/MALDINI_finall.mp4',
  'minimal 01.mp4':'https://res.cloudinary.com/expztcyo/video/upload/v1793508122/work/motion%20garphics/minimal_01.mp4',
  'Brands.mov':'https://res.cloudinary.com/expztcyo/video/upload/v1793508070/work/motion%20garphics/Brands.mov'
};

function getOptimizedVideoUrl(filename) {
  const url=CLOUDINARY_VIDEOS[filename];
  return url ? url.replace('/video/upload/','/video/upload/c_limit,w_800/q_auto/f_auto/') : null;
}

function renderCloudinaryWork() {
  Object.entries(WORK_MEDIA).forEach(([category,files])=>{
    const track=document.querySelector(`.train-track[data-track=\"${category}\"]`);
    if(!track){console.warn('Missing category track:',category);return;}
    const count=track.closest('.train-category')?.querySelector('.train-count');
    track.innerHTML=''; let rendered=0;
    files.forEach(([filename])=>{
      const src=getOptimizedVideoUrl(filename); if(!src){console.warn('Missing Cloudinary URL:',filename);return;}
      const card=document.createElement('article'); card.className='train-card video-card';
      const media=document.createElement('div'); media.className='train-media';
      const video=document.createElement('video'); video.src=src; video.controls=true; video.preload='metadata'; video.playsInline=true; video.muted=true; video.draggable=false; video.setAttribute('aria-label',filename);
      media.appendChild(video); card.appendChild(media); track.appendChild(card); rendered++;
    });
    if(count) count.textContent=`${String(rendered).padStart(2,'0')} VIDEOS`;
  });
}

function initializeWorkDrag(){
  document.querySelectorAll('.train-window').forEach(el=>{let down=false,x=0,scroll=0;
    el.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.target.closest('video,button')||e.button!==0)return;down=true;x=e.clientX;scroll=el.scrollLeft;el.classList.add('dragging');el.setPointerCapture(e.pointerId);});
    el.addEventListener('pointermove',e=>{if(down)el.scrollLeft=scroll-(e.clientX-x);});
    const stop=()=>{down=false;el.classList.remove('dragging');};
    el.addEventListener('pointerup',stop);el.addEventListener('pointercancel',stop);el.addEventListener('lostpointercapture',stop);
  });
}

function initShoebWork(){renderCloudinaryWork();initializeWorkDrag();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initShoebWork);else initShoebWork();
