let content = `<item>
    <title>
        Tọa đàm về cơ hội tham gia hệ sinh thái mở cho startup Việt
    </title>
    <description>
        <![CDATA[
        <a href="https://startup.vnexpress.net/tin-tuc/startup-2019/toa-dam-ve-co-hoi-tham-gia-he-sinh-thai-mo-cho-startup-viet-4002351.html"><img width=130 height=100 src="https://i-startup.vnecdn.net/2019/10/26/BK3A43331268157009211923051571-8637-8777-1572080950_180x108.jpg" ></a></br>Các chuyên gia từ Ernst&amp;Young, VinID, Swiss EP, NBN Media... sẽ thảo luận về cơ hội, thách thức và chiến lược cho startup khi bắt tay với doanh nghiệp lớn.
        ]]>
    </description>
    <pubDate>Sat, 26 Oct 2019 16:15:00 +0700</pubDate>
    <link>
        https://startup.vnexpress.net/tin-tuc/startup-2019/toa-dam-ve-co-hoi-tham-gia-he-sinh-thai-mo-cho-startup-viet-4002351.html
    </link>
    <slash:comments>0</slash:comments>
</item>`;
/**
 * expect: 
 * title: 'Tọa đàm về cơ hội tham gia hệ sinh thái mở cho startup Việt'
 * description: `<![CDATA[
        <a href="https://startup.vnexpress.net/tin-tuc/startup-2019/toa-dam-ve-co-hoi-tham-gia-he-sinh-thai-mo-cho-startup-viet-4002351.html"><img width=130 height=100 src="https://i-startup.vnecdn.net/2019/10/26/BK3A43331268157009211923051571-8637-8777-1572080950_180x108.jpg" ></a></br>Các chuyên gia từ Ernst&amp;Young, VinID, Swiss EP, NBN Media... sẽ thảo luận về cơ hội, thách thức và chiến lược cho startup khi bắt tay với doanh nghiệp lớn.
        ]]>`
 */

 let getInfoTag = function(content, startScript, endScript) {
    let indexStartTitle = content.indexOf(startScript) + startScript.length;
    let indexEndTitle   = content.indexOf(endScript);

    return content.substring(indexStartTitle, indexEndTitle);
 }

let getInfoBody = function (content){
    let title = getInfoTag(content, '<title>', '</title>');
    let description = getInfoTag(content, '<description>', '</description>');
    let pubDate = getInfoTag(content, '<pubDate>', '</pubDate>');
    console.log({ title, description, pubDate })
}

getInfoBody(content);

// CLEAN CODE