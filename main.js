//Run this in the console.

%%%%%#3ff

var pages = Array();

archivePage = function(){
  if(window.archivePage.currentnumber < window.archivePage.endnumber){
  window.document.body.innerHTML = '<iframe style="width:1200px; height:1200px;" src="https://web.archive.org/save/http://aomol.msa.maryland.gov/megafile/msa/speccol/sc2900/sc2908/000001/000054/html/am54--'+window.archivePage.currentnumber+'.html"></iframe>';
  console.log(window.archivePage.currentnumber);
  window.archivePage.currentnumber ++;
  }
}
window.archivePage.currentnumber = 6;
window.archivePage.endnumber   = 816;
setInterval(archivePage,45000);
