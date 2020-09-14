# SurveyVoice (SVoice): A comprehensive guide for recording voice answers in surveys

This repository provides the source codes of the “SurveyVoice (SVoice)” tool developed by Jan Karem Höhne, Konstantin Gavras, and Danish Daniel Qureshi. SVoice enables researchers to record respondents’ voice answers to survey questions in (mobile) web surveys. It is based on different program languages, such as JavaScript and PHP, and licensed under the XXX. SVoice can be implemented in browser-based survey software solutions. The recording of voice answers is generally not restricted to specific operating systems and/or Internet browsers.

# Adapting SVoice to your survey

In this repository, we provide a generic solution of SVoice (see Figure below). When using SVoice for your own purposes, you may include a logo and a survey question in the [Upload_Audio.html](/Upload_Audio.html) file. Adaptations to the voice recording instruction (e.g., how to record voice answers), need to be implemented in the [uploadForm_Audio.js](/uploadForm_Audio.js) file.

<p align="center">
  <img src="/img/screenshot.jpg" width="50%" height="50%" />
</p>

# Implementing SVoice in your survey

The implementation of SVoice depends on the survey software solution used. In general, SVoice is not hosted on the server of the respective survey software solution but on an external server (e.g., the server of your institution). This is also were respondents’ voice answers are stored. Respondents must be redirected from the survey software solution to the respective server. It is necessary to add a unique and anonymous ID (e.g., a random number) in the link for each respondent. This ID must be saved in the form of a TIC variable in the survey software solution and the file name of the voice recordings. This is crucial to match the survey data collected via the survey software solution and the voice recordings.

# SVoice and ethical considerations

The use of program languages, such as JavaScript and PHP, enables researchers to collect sensitive data, such as respondents’ voice answers. Researchers using such data face ethical considerations. Although we encourage researchers to use voice data to improve survey research methods, we clearly state that these data should not be used to surveil respondents or to frivolously adapt responses given by respondents. We are convinced that these kinds of data should not be collected without respondents’ consent, even if willingness to participate in surveys decreases. Furthermore, we highly recommend checking (specific) legal prerequisites to protect the online privacy of respondents.

# SVoice disclaimer

Although the authors tested the application of SVoice, they wish to state clearly here that the use of all program codes is completely the user’s own responsibility. There is no warranty of any kind that the codes work properly, and users are encouraged to test their functionality before utilization. The authors cannot be held responsible for any malfunctions and/or damages, even if SVoice is the responsible source.

Citation: Höhne, J. K., Gavras, K., & Qureshi, D. D. (2020). SurveyVoice (SVoice): A comprehensive guide for recording voice answers in surveys. Zenodo. DOI: …

