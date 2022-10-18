/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function conName(name) {
    printDiv("NameStyle", "resultNameStyle");

    var checkFirstname = /^[a-zA-Z -]+$/;
    var checkLastname = /^[a-zA-Z -']+$/;

    if (name.length > 60) {
        writeMsg("resultNameStyle", "Name ist zu lang.");
        return false;
    }

    var fullname = name.split(" ");

    if (fullname.length !== 2 || fullname === " ") {
        writeMsg("resultNameStyle", "Bitte nur Vorname und Nachname eingeben.");
        return false;
    }

    var firstname = fullname[0];
    var lastname = fullname[1];

    if (!checkFirstname.test(firstname)) {
        writeMsg("resultNameStyle", "Erlaubte Zeichen im Vornamen sind Buchstaben von a-Z und Bindestrich (-). ");
        return false;
    }

    if (!checkLastname.test(lastname)) {
        writeMsg("resultNameStyle", "Erlaubte Zeichen im Nachnamen sind Buchstaben von a-Z, Bindestrich (-) und Apostroph ('). ");
        return false;
    }

    if (!/[A-Z]/.test(firstname[0])) {
        writeMsg("resultNameStyle", "Der Vorname darf nicht klein geschrieben werden.");
        return false;
    }

    if (!/[A-Z]/.test(lastname[0])) {
        writeMsg("resultNameStyle", "Der Nachname darf nicht klein geschrieben werden.");
        return false;
    }

    writeMsg("resultNameStyle", "Alles in Ordnung.");
    return true;
}

function conPostleitzahl(postleitzahl) {
    printDiv("PostleitzahlStyle", "resultPostleitzahlStyle");

    if (Number.isNaN(Number(postleitzahl))) {
        writeMsg("resultPostleitzahlStyle", "Bitte tragen Sie nur numerische Werte für ihr Postleitzahl ein.");
        return false;
    }

    if (!Number.isInteger(Number(postleitzahl))) {
        writeMsg("resultPostleitzahlStyle", "Tragen Sie nur ganze Zahlen ins Feld ein.");
        return false;
    }

    if (postleitzahl <= 0 || postleitzahl > 99999) {
        writeMsg("resultPostleitzahlStyle", "Postleitzahl ist nicht im gültigen Bereich zwischen 0 und 99999.");
        return false;
    }

    if (postleitzahl.toString().length !== 5) {
        writeMsg("resultPostleitzahlStyle", "Ihr Postleitzahl ist nicht 5-stellig.");
        return false;
    }
    writeMsg("resultPostleitzahlStyle", "Alles in Ordnung.");
    return true;
}

function conStadt(stadt) {
    printDiv("StadtStyle", "resultStadtStyle");

    var checkStadt = /^[a-zA-Z]+$/;


    if (stadt.length > 40 || stadt.length < 0) {
        writeMsg("resultStadtStyle", "Stadtbezeichnung ist zu kurz oder zu lang");
        return false;
    }

    if (!checkStadt.test(stadt)) {
        writeMsg("resultStadtStyle", "Erlaubte Zeichen sind Buchstaben von a-Z.");
        return false;
    }

    if (!/[A-Z]/.test(stadt[0])) {
        writeMsg("resultStadtStyle", "Stadt darf nicht klein geschrieben werden.");
        return false;
    }

    writeMsg("resultStadtStyle", "Alles in Ordnung.");
    return true;
}

function conStrasse(strasse) {
    printDiv("StrasseStyle", "resultStrasseStyle");

    var checkStrasse = /^[a-zA-Z -]+$/;


    if (strasse.length > 60 || strasse.length < 0) {
        writeMsg("resultStrasseStyle", "Straßenbezeichnung ist zu kurz oder zu lang");
        return false;
    }

    if (!checkStrasse.test(strasse)) {
        writeMsg("resultStrasseStyle", "Erlaubte Zeichen sind Buchstaben von a-Z und Bindestriche (-).");
        return false;
    }

    if (!/[A-Z]/.test(strasse[0])) {
        writeMsg("resultStrasseStyle", "Straße darf nicht klein geschrieben werden.");
        return false;
    }

    writeMsg("resultStrasseStyle", "Alles in Ordnung.");
    return true;
}

function conHausnummer(hausnummer) {
    printDiv("HausnummerStyle", "resultHausnummerStyle");

    var checkHausnummer = /^(\d{1,4})([a-zA-Z]?)$/;

    if (!checkHausnummer.test(hausnummer)) {
        writeMsg("resultHausnummerStyle", "Hausnummer darf aus maximal 4 Ziffern gefolgt von einem Buchstaben bestehen.");
        return false;
    }
    writeMsg("resultHausnummerStyle", "Alles in Ordnung.");
    return true;
}

function conIBAN(iban) {
    printDiv("IBANStyle", "resultIBANStyle");

    if (iban.length !== 22) {
        writeMsg("resultIBANStyle", "Die IBAN muss eine Laenge von 22 Zeichen haben.");
        return false;
    }

    if (!/[A-Z]/.test(iban[0]) || !/[A-Z]/.test(iban[1])) {
        writeMsg("resultIBANStyle", "Die ersten 2 Zeichen der IBAN besteht aus Buchstaben. (Laenderkennzeichnung)");
        return false;
    }

    if (isNaN(iban.substring(2))) {
        writeMsg("resultIBANStyle", "Die IBAN darf bis auf die ersten 2 Zeichen nur aus Zahlen bestehen.");
        return false;
    }

    writeMsg("resultIBANStyle", "Alles in Ordnung.");
    return true;
}

function conGeldbetrag(geldbetrag) {
    printDiv("GeldbetragStyle", "resultGeldbetragStyle");

    var checkGeldbetrag = /^\d*(?:\.\d{0,2})?$/;
    geldbetrag = geldbetrag.toString().replace(',', '.');

    if (geldbetrag.length === 0) {
        writeMsg("resultGeldbetragStyle", "Bitte tragen Sie einen Betrag ein.");
        return false;
    }

    if (Number.isNaN(Number(geldbetrag))) {
        writeMsg("resultGeldbetragStyle", "Bitte tragen Sie nur numerische Werte für den Geldbetragt ein.");
        return false;
    }

    if (!checkGeldbetrag.test(geldbetrag)) {
        writeMsg("resultGeldbetragStyle", "Geldbetrag wurde fehlerhaft eingetragen.");
        return false;
    }

    if (geldbetrag > 1000000000 || geldbetrag < 0) {
        writeMsg("resultGeldbetragStyle", "Geldbetrag zu groß oder zu klein.");
        return false;
    }
    writeMsg("resultGeldbetragStyle", "Alles in Ordnung.");
    return true;
}


