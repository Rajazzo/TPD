# TPD Badges

Die Badges für die Mentoren haben folgendes Layout:

![Badge-Template](TPD-Badge-Template.png) 

Die Badges für alle 65 Mentoren (Stand 12.03.2026) sind in der Datei [index.html](index.html) zusammengefasst. Die QR-Codes der einzelnen Mentoren wurden dabei über die [Treffpunkt Management App](https://treffpunkt-managment-app.pages.dev/dashboard/register_mentor) einzeln in das Verzeichnis [qr-code](./qr-codes/) exportiert. Jeder QR Code ist dabei mit dem Vornamen und ersten Buchstaben des Nachnamens des jeweiligen Mentors benannt.

Für jeden Mentor ist im HTML eine Klasse <i>.card</i> angelegt, in dem der Vorame und erste Buchstabe des Nachnames (hier <i>Name X</i>) sowie der hinterlegte QR Code und das Treffpunkt Deutsch Logo zusammengefasst sind.

```
<code>
    <div class="card">
        <div class="name">
            Name X
        </div>
        <div class=qrcode>
            <img class="logo" src="./treffpunkt-deutsch2.png"/>
            <img class="qr" src="./qr-codes/Name X.png"/>
        </div>        
    </div>
</code>
````

Im dazugehörigen [style.css](style.css) ist das Layout für jede dieser <i>.card</i> Abschnitte definiert. Wesentliche Elemente sind die absoluten Maße der Karte (8,5 x 5,5 cm) sowie die Ausrichtung der Elemente über ein sogenanntes "grid" Layout.

Im Falle, dass eine Karte im Hochformat für einen Labeldrucker benötigt wird, ist ein Beispiel dazu in der Datei [brother_ql-800.html](brother_ql-800.html) und [brother_ql-800.css](brother_ql-800.css) hinterlegt.