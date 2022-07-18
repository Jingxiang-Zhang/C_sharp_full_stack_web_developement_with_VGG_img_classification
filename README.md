### Background information

This project is Undergraduate Research Project (URP), it took our team a year to finish this. Though our team has three members, we fully participate in every process when we did this, in order to learn more knowledges. Here, I will only talk about my works.

It is difficult to keep track with each cow in dairy farm, while it is crucial because we need to know the status of each cow. For example, if we know how much food it eat, we may analyse that which cow is more easily to get sick, and we can do some security measure to prevent it.

Therefore, we decided to solve this problem by 3 parts. First, collect and tag image data from dairy farm. Second, train the target detection neural network with this data, and provide the detection interface to user. Third, train the image classification neural network. So that we could take the frame of video, locate the cow in the image by target dection network, and identify the cow by classification (I will not demonstrate image classification part, because it is not my work). Finally, we set up a website for dairy farmer, and using the detection interface to detect the cows in the video.

### About the Code

The project is the website part. For the target detection network part, I use PyInstaller to pack the python file into a exe file, and invoke the exe file by C#. Because these two package is too big to upload in github, I compress it into a series of small files. You will need to decompression the file in  /Python/TestCow.7z, /Python/ffmpeg.7z, and /Python/train.7z 

To see the detail of this project, please read Final Report.pdf