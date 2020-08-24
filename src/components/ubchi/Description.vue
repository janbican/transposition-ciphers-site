<template>
  <div class="description">
    <p>
      Šifrovací metoda, kterou používala německá armáda za 1. světové války.
      Němci ji začali používat od roku 1912. Byť ji Francouzi dokázali luštit,
      nedokázali to udržet v tajnost - svými úspěchy se chlubili v celostátním
      tisku. Němci tedy šifru vyměnili.
    </p>

    <p>
      ÜBCHI šifra je
      <strong>prakticky totožná s dvojitou sloupcovou transpozicí</strong>. Pro
      obě transpozice se používal stejný klíč, který mohl být složen z více
      slov. Podle počtu slov se před druhou transpozicí přidával počet
      "klamačů", což mohlo být například písmeno "z".
    </p>

    <p>
      Poznámka: některé zdroje se o klamačích nezmiňují a ÜBCHI šifru popisují
      jako běžnou dvojitou sloupcovou transpozici.
    </p>

    <p>
      <strong>Šifrování</strong> probíhá stejně jako v případě sloupcové
      transpozice. Provede se poprvé na otevřeném textu. K němu se připojí
      klamače (podle počtu slov klíče), načež se provede sloupcová transpozice
      podruhé. Výsledkem je šifrovaný text.
    </p>

    <p>
      <strong>Dešifrování</strong> je inverze šifrování. Po prvním dešifrování
      (ve stylu sloupcové transpozice) se odstraní klamače a provede se
      dešifrování druhé, načež vzikne původní otevřený text.
    </p>

    <p>
      O sloupcové transpozici více
      <router-link :to="{ name: 'columnar' }">zde</router-link>.
    </p>
  </div>
</template>
