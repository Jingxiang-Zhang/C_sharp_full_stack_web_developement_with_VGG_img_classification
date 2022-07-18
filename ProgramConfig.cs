using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CowCow
{
    public class ProgramConfig
    {
        public static string programloc = @"F:/大三下/URP/软著/CowCow/";
        //需要配置的文件
       
        public static string pictureloc = programloc + @"CowCow/CowPicture";
        public static string userloc = programloc + @"CowCow/UserInformation/UserInfo.data";
        public static string imageloc = programloc + @"CowCow/Image";
        public static string VideoData = programloc + @"CowCow/VideoDate";

        public static string pylearn = programloc + @"CowCow/Python/train.exe";
        public static string pyconfig = programloc + @"CowCow/Python/config.data";
        public static string pyresult = programloc + @"CowCow/Python/result";
        public static string pysave= programloc + @"CowCow/Python/save";
        public static string pymap = programloc + @"CowCow/Python/map";
        public static string pytrainlog = programloc + @"CowCow/Python/trainlog.txt";
        public static string pyerrorlog = programloc + @"CowCow/Python/errorlog.txt";

        public static string pyTestCow = programloc + @"CowCow/Python/TestCow.exe";
        public static string pyImageTestConfig = programloc + @"CowCow/Python/ImageTestConfig/ImageTestConfig.txt";
        public static string pyFfmpegloc = programloc + @"CowCow/Python/ffmpeg.exe";
        public static string pyResultPicLoc = programloc + @"CowCow/Python/re.png";
        public static string pyTempPicLoc = programloc + @"CowCow/Python/temp.png";
        public static string pyClassifier = programloc+ @"CowCow/Python/cowsort.xml";
    }
}