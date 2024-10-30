from bs4 import BeautifulSoup

# Define the path to your HTML file
input_html_path = '/Users/dhananjaysurti/model_earth/useeio-widgets/src/html/impact_chart_config.html'
output_html_path = '/Users/dhananjaysurti/model_earth/useeio-widgets/src/html/impact_chart_config.html'

# Define the script tag to be added
script_tag_content = """
<script>
if(typeof param=='undefined'){ var param={}; }
param.showsearch = "true";
document.addEventListener('hashChangeEvent', function (elem) {
    console.log("useeio-widgets chart detects URL hashChangeEvent");
    hashChangedUseeio();
}, false);
function hashChangedUseeio() {
    model = getEpaModel();
    // pageScript();
}
</script>
"""

# Read the original HTML file
with open(input_html_path, 'r', encoding='utf-8') as file:
    html_content = file.read()

# Insert the script tag content before the closing </head> tag
updated_html_content = html_content.replace('</head>', script_tag_content + '\n</head>')

# Save the modified HTML to a new file
with open(output_html_path, 'w', encoding='utf-8') as file:
    file.write(updated_html_content)

print("Script tag added successfully without altering original indentation!")
