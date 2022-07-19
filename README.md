
This project is Undergraduate Research Project (URP), it took our team a year to finish this. Though our team has three members, we fully participate in every process when we did this, in order to learn more knowledge. Here, I will only talk about my works.

### Background Information

It is difficult to keep track with each cow in dairy farm, while it is crucial because we need to know the status of each cow. For example, if we know how much food it eat, we may analyse that which cow is more easily to get sick, and we can do some security measure to prevent it.

Therefore, we decided to solve this problem by 4 parts. First, collect and tag image data from dairy farm. Second, train the target detection neural network (use tensorflow) with this data, and provide the detection interface to user. Third, train the image classification neural network. So that we could take the frame of video, locate the cow in the image by target dection network, and identify the cow by classification (I will not demonstrate image classification part, because it is not my work). Finally, we set up a website for dairy farmer, and using the detection interface to detect the cows in the video.

### About the Code

The project is the website part. For the target detection network part, I use PyInstaller to pack the python file into a exe file, and invoke the exe file by C#. Because these two package is too big to upload in github, I compress it into a series of small files. You will need to decompression the file in  /Python/TestCow.7z, /Python/ffmpeg.7z, and /Python/train.7z 

To see the detail of this project, please read Final Report.pdf

### Data Collection and Preprocessing	

The data was collected in December 14th, 2019, in Shunyi, Beijing. We took three parts of cow's body, which are the cow's back, the cow's side and the cow's head. Among them, there are about 400 pictures and 10 videos for the cow's back, 700 pictures and 20 videos for the cow's side, and 150 images and 10 videos for cow's head. 

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/image_collection.png">
</div>

After data cleansing, I tag the data by LabelMe.

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/image_tags.png">
</div>

Then, I use four methods to augment the data set: translation, horizontal flip, change contrast and brightness, and expand and shrink. 

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/image_augmentation.png">
</div>

For the video data, I took the frame of the video to do the detection.

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/video_frame.png">
</div>

### Target Detection	

In this process, I used two methods to detect the cow. One is classical target dectection algorithm, the other is deep learning Faster RCNN. Finally, I choosed deep learning.

#### Classical Detection method

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/classical_method.png">
</div>

#### Faster RCNN

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/faster_rcnn.png">
</div>

### Set Up Website

We use C# aspx as our backend website language, MVC architecture. There are 5 mainly part of our website:

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/web_architecture.png">
</div>

The front page of website:

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/frontpage.png">
</div>

Upload and manage user's own cows pictures

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/cow_group_management.png">
</div>

Train the network by the new cows pictures

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/training.png">
</div>

You can examine the training log at any time 

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/training_process.png">
</div>

After training the cow pictures, you can watch the realtime video target detection and identity recognition.

<div align="center">
  <img src="https://github.com/Jingxiang-Zhang/C_sharp_full_stack_web_developement_with_VGG_img_classification/blob/main/README_img/realtime_detection.png">
</div>
