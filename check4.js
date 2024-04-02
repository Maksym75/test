"use strict";
// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["Video"] = "video";
    TypesOfMedia["Audio"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["MP4"] = ".mp4";
    FormatsOfMedia["MOV"] = ".mov";
    FormatsOfMedia["MKV"] = ".mkv";
    FormatsOfMedia["WEBM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia({ name, type, format, subtitles, marks } = {
    name: "example",
    type: TypesOfMedia.Video,
    format: FormatsOfMedia.MP4,
}) {
    let marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.join(" ");
    }
    else if (typeof marks === "string") {
        marksLog = marks;
    }
    else
        marksLog = "Unsupported type of marks";
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles !== null && subtitles !== void 0 ? subtitles : "none"}`);
    // помните что это за оператор ??
    return "Media started";
}
playMedia({
    name: "WoW",
    format: FormatsOfMedia.MKV,
    type: TypesOfMedia.Audio,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
});
playMedia({
    name: "TRY",
    format: FormatsOfMedia.WEBM,
    type: TypesOfMedia.Video,
    subtitles: "O LA lA !!!",
    marks: "SimpleMARKS",
});
playMedia({
    name: "TRYINHHH",
    format: FormatsOfMedia.MP4,
    type: TypesOfMedia.Video,
    marks: 5667,
});
