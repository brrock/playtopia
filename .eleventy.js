const { DateTime } = require("luxon")
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin/config.yml');  
  eleventyConfig.addPassthroughCopy('./src/play/*/*.js');
  eleventyConfig.addPassthroughCopy('./src/play/*/*.css');  
  eleventyConfig.addPassthroughCopy('./src/play/4245/imgs/*.png');
  eleventyConfig.addPassthroughCopy('./src/download.png'); 
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
        return {
          dir: {
            input: "src",
            output: "public"
          }
        }
      };
