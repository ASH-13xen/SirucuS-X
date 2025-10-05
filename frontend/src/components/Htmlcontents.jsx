import React from "react";

const topics = [
  "Overview of HTML",
  "Document Structure",
  "Metadata",
  "Semantic HTML",
  "Headings and Sections",
  "Attributes",
  "Text Basics",
  "Links",
  "Lists",
  "Navigation",
  "Tablets",
  "Forms",
  "Images",
  "Audio and Video",
  "Template, Slot, and Shadow",
  "HTML APIs",
  "Focus",
  "Other Inline Text Elements",
  "Details and Summary",
  "Dialog",
  "Conclusion and Next Steps",
];

const topicContent = {
  "Overview of HTML": [
    <p>"HyperText Markup Language, or HTML, is the standard markup language for describing the structure of documents displayed on the web. HTML consists of a series of elements and attributes which are used to mark up all the components of a document to structure it in a meaningful way."</p>,
    <p>"HTML documents are basically a tree of nodes, including HTML elements and text nodes. HTML elements provide the semantics and formatting for documents, including creating paragraphs, lists and tables, and embedding images and form controls. Each element may have multiple attributes specified. Many elements can have content, including other elements and text. Other elements are empty, with the tag and attributes defining their function."</p>,
    <p>"There are several categories of elements, including metadata, sectioning, text, inline semantic, form, interactive, media, component, and scripting. We'll cover most of these in the series. But first, what is an element?"</p>,
    <p>
      <h2 style={{ color: "#93b9b2", fontSize: "1.3em" }}>
        Elements
      </h2>
      <p>
        HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear or act in a certain way. HTML elements are delineated by tags, written using angle brackets (
        <code translate="no" dir="ltr">&lt;</code>
        " and "
        <code translate="no" dir="ltr">&gt;</code>
        ")."
      </p>
      <p style={{ color: "white", padding: "1em", width: "60%" }}>
        Our page title is a heading, level one, for which we use the
        <code translate="no" dir="ltr">&lt;h1&gt;</code>
        tag. The actual title, "Machine Learning Workshop", is the content of our element. The content goes between the open and closing tags. The entire thing—the opening tag, closing tag, and the content—is the element.

      </p>
      <p><img src="/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26.png" alt="The tags and content that make up an HTML element." width="752" height="245" srcset="https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_36.png 36w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_48.png 48w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_72.png 72w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_96.png 96w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_480.png 480w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_720.png 720w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_856.png 856w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_960.png 960w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_1440.png 1440w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_1920.png 1920w,https://web.dev/static/learn/html/overview/image/the-tags-content-make-10a59ba9efd26_2880.png 2880w" sizes="(max-width: 840px) 100vw, 856px" /></p>
      <p>The closing tag is the same tag as the opening tag, preceded by a slash.</p>
    </p>,

    <p>Elements and tags aren't the exact same thing, though many people use the terms interchangeably. The tag name is the content in the brackets. The tag includes the brackets. In this case, <code translate="no" dir="ltr">&lt;h1&gt;</code>. An "element" is the opening and closing tags, and all the content between those tags, including nested elements.</p>,

    <p>
      <devsite-code data-copy-event-label=""><div class="devsite-code-buttons-container" role="group" aria-label="Action buttons"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample" data-title="Copy code sample"></button></div><pre class="" translate="no" dir="ltr" is-upgraded="" syntax="HTML"><code translate="no" dir="ltr">&lt;p&gt;This paragraph has some<br />
        <tab>    </tab>&lt;strong&gt;&lt;em&gt;strongly emphasized&lt;/em&gt;&lt;/strong&gt;<br />
        <tab>    </tab>content&lt;/p&gt;
      </code></pre></devsite-code>
      <br />
    </p>,
    <p>
      This paragraph element has other elements <em>nested</em> in it.  When nesting elements, it's important that they are properly nested.  HTML tags should be closed in the reverse order of which they were opened. In the above example, notice how the <code translate="no" dir="ltr">&lt;em&gt;</code> is both opened and closed within the opening and closing <code translate="no" dir="ltr">&lt;strong&gt;</code> tags, and the <code translate="no" dir="ltr">&lt;strong&gt;</code> is both open and closed within the <code translate="no" dir="ltr">&lt;p&gt;</code> tags.
    </p>,
    <p>Browsers do not display the tags. The tags are used to interpret the content of the page.</p>,
    <p>HTML is very, very forgiving. For example, if we omit the closing <code translate="no" dir="ltr">&lt;/li&gt;</code> tags, the closing tags are implied.</p>,
    <p>
      <devsite-code data-copy-event-label=""><div class="devsite-code-buttons-container" role="group" aria-label="Action buttons"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample" data-title="Copy code sample"></button></div><pre class="" translate="no" dir="ltr" is-upgraded="" syntax="HTML"><code translate="no" dir="ltr">&lt;ul&gt;<br />
        <tab>    </tab>&lt;li&gt;Blendan Smooth<br />
        <tab>    </tab>&lt;li&gt;Hoover Sukhdeep<br />
        <tab>    </tab>&lt;li&gt;Toasty McToastface<br />
        &lt;/ul&gt;
      </code></pre></devsite-code>
    </p>,
    <p>Although it is valid to not close an <code translate="no" dir="ltr">&lt;li&gt;</code>, it isn't good practice.  The closing <code translate="no" dir="ltr">&lt;/ul&gt;</code> is mandatory. If the unordered list's closing tag is omitted, the browser will try to determine where your list and list items end, but you might not agree with the decision.</p>,
    <p>The specification for each element lists whether the closing tag is mandatory or not. "Neither tag is omissible" in the specification means both an opening tag and a closing tag are required. The <a href="https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission" style={{ textDecoration: 'underline' }} >specification provides a list of all the required closing tags</a>.
    </p>,
    <p>If the <code translate="no" dir="ltr">&lt;em&gt;</code> or <code translate="no" dir="ltr">&lt;strong&gt;</code> in the example earlier  had not been closed, the browser may or may not close the element for you. Not closing an <code translate="no" dir="ltr">&lt;em&gt;</code> simply leads to content possibly being rendered differently than you intended.  If a <code translate="no" dir="ltr">&lt;/ul&gt;</code> is omitted and the next tag is a closing tag for the list's parent container, you're lucky. If, on the other hand, it's an opening <code translate="no" dir="ltr">&lt;h1&gt;</code> tag, the browser will assume the header is part of the list, including inheriting styles. Some omitted closing tags cause bigger issues: not closing some tags, such as <code translate="no" dir="ltr">&lt;script&gt;</code>, <code translate="no" dir="ltr">&lt;style&gt;</code>, <code translate="no" dir="ltr">&lt;template&gt;</code>, <code translate="no" dir="ltr">&lt;textarea&gt;</code>, and <code translate="no" dir="ltr">&lt;title&gt;</code>, breaks subsequent content.
    </p>,
    <p>Having some content being unintentionally italic or having a heading indented won't destroy your business. Having most of your content appear unstyled in a 200x300 textarea because you forgot to add a <code translate="no" dir="ltr">&lt;/textarea&gt;</code> or not show up at all because you forgot to close a <code translate="no" dir="ltr">&lt;/style&gt;</code> makes the site unusable.
    </p>,
    <p>In some cases, browsers will include elements even if the tags aren't present in the markup. Because elements can be implied, an element can exist even when the tags don't. The browser will add a <code translate="no" dir="ltr">&lt;body&gt;&lt;/body&gt;</code> around your content and  <code translate="no" dir="ltr">&lt;tbody&gt;&lt;/tbody&gt;</code> around your table rows, even if you don't. That being said, while it is valid to omit tags, don't. Also, as already mentioned, make sure they are correctly nested. Your future self as a maintainer of markup, and anyone else working on your code base, will thank you.
    </p>,
    <p>There are two types of elements: replaced and non-replaced.

    </p>,
    <p>
      <h2 style={{ color: "#93b9b2", fontSize: "1.3em" }}>
        Non-replaced elements
      </h2>
    </p>,
    <p>The paragraph, header, and lists marked up in the earlier section are all non-replaced. Non-replaced elements have opening and (sometimes optional) closing tags that surround them and may include text and other tags as sub-elements. These enclosing tags can turn a phrase or image into a hyperlink, can make a sentence into a header, can give emphasis to words, and so on.</p>,
    <p>
      <h2 style={{ color: "#93b9b2", fontSize: "1.3em" }}>
        Replaced and void elements
      </h2>
    </p>,
    <p>Replaced elements are replaced by objects, be it a graphical user interface (UI) widget in the case of most form controls, or a raster or scalable image file in the case of most images. Being replaced by objects, each comes with a default appearance. Depending on the type of object and the browser, the applicable styles are limited. For example, most browsers enable limited styling of UI widgets and related pseudo-elements. In the case of raster images, height, width, clipping, and filtering are easily done with CSS, but not much else. On the other hand, scalable vector graphics, using a markup language based on XML similar to HTML are fully scalable (unless they contain raster images). They are also fully styleable. Note that the ability to style an embedded SVG from the CSS linked to the HTML file that embeds it depends on how the SVG is set up.</p>,
    <p>In this example, the two replaced elements <code translate="no" dir="ltr">&lt;img&gt;</code> and <code translate="no" dir="ltr">&lt;input&gt;</code> are replaced by non-text content: an image and a graphical user interface object, respectively.</p>,
    <p>
      <devsite-code data-copy-event-label=""><div class="devsite-code-buttons-container" role="group" aria-label="Action buttons"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample" data-title="Copy code sample"></button></div><pre class="" translate="no" dir="ltr" is-upgraded="" syntax="HTML"><code translate="no" dir="ltr">&lt;input type="range"&gt;<br />
        &lt;img src="switch.svg" alt="light switch"&gt;
      </code></pre></devsite-code>
      <div></div>
    </p>,
    <p>The slash at the end is old school: it's a way of indicating that the element is self-closing and there will be no matched end or closing tag.</p>,
    <p>Void elements cannot contain text content or nested elements. Void elements include  <code translate="no" dir="ltr">&lt;br&gt;</code>, <code translate="no" dir="ltr">&lt;col&gt;</code>, <code translate="no" dir="ltr">&lt;embed&gt;</code>, <code translate="no" dir="ltr">&lt;hr&gt;</code>, <code translate="no" dir="ltr">&lt;img&gt;</code>, <code translate="no" dir="ltr">&lt;input&gt;</code>, <code translate="no" dir="ltr">&lt;link&gt;</code>, <code translate="no" dir="ltr">&lt;meta&gt;</code>, <code translate="no" dir="ltr">&lt;source&gt;</code>, <code translate="no" dir="ltr">&lt;track&gt;</code>, and <code translate="no" dir="ltr">&lt;wbr&gt;</code>, among others.</p>,
    <p>Most replaced elements are void elements, but not all. The <code translate="no" dir="ltr">video</code>, <code translate="no" dir="ltr">picture</code>, <code translate="no" dir="ltr">object</code>, and <code translate="no" dir="ltr">iframe</code> elements are replaced, but aren't void. They can all contain other elements or text, so they all have a closing tag.</p>,
    <p>Most void elements are replaced; but again, not all, as we saw with <code translate="no" dir="ltr">base</code>, <code translate="no" dir="ltr">link</code>, <code translate="no" dir="ltr">param</code>, and <code translate="no" dir="ltr">meta</code>. Why have a void element, which can't have any content, that isn't replaced and thereby doesn't render anything to the screen? To provide information about the content! The information is provided by the elements' attributes.</p>,
    <p>
      <h2 style={{ color: "#93b9b2", fontSize: "1.3em" }}>
        Attributes
      </h2>
    </p>,
    <p>You may have noticed the <code translate="no" dir="ltr">&lt;img&gt;</code> and <code translate="no" dir="ltr">&lt;input</code>&gt; examples had more than just the element type in their opening tag. These extra bits of space-separated name/value pairs (though sometimes including a value is optional) are called <em>attributes</em>. Attributes are what make HTML so incredibly powerful. We'll be covering hundreds of attributes and attribute values in this series, but here we'll just discuss what they are in general and how to include them.</p>,
    <p>Attributes provide information about the element. The attribute, like the rest of the opening tag, won't appear in the content, but they do help define how the content will appear to both your sighted and non-sighted (assistive technologies and search engines) users.</p>,
    <p>Attributes only appear in the opening tag. The opening tag always starts with the element type. The type can be followed by zero or more attributes, separated by one or more spaces. Most attribute names are followed by an equal sign equating it with the attribute value, wrapped with opening and closing quotation marks.</p>,
    <p><img src="/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66.png" alt="An opening tag with attributes." width="800" height="218" srcset="https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_36.png 36w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_48.png 48w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_72.png 72w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_96.png 96w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_480.png 480w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_720.png 720w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_856.png 856w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_960.png 960w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_1440.png 1440w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_1920.png 1920w,https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_2880.png 2880w" sizes="(max-width: 840px) 100vw, 856px" /></p>,
    <p>In this example, we have an anchor link with two attributes. These two attributes have converted the content "Registration" into an internal anchor link that scrolls to the attribute <code translate="no" dir="ltr">id="register"</code> in the current browser tab when the link is clicked, tapped, or activated with the keyboard or other device.</p>,
    <p>Attributes define the behavior, linkages, and functionality of elements. We'll cover more attributes in the <a href="/learn/html/attributes">Attributes</a> section of this series. For now, just note that some attributes are global—meaning they can appear within any element's opening tag. Some apply only to several elements but not all, and others are element-specific, relevant only to a single element.</p>,
    <p>Most attributes are name/value pairs. Boolean attributes, whose value is true, false, or the same as the name of the attribute, can be included as just the attribute: the value is not necessary.</p>,
    <p>
      <devsite-code data-copy-event-label=""><div class="devsite-code-buttons-container" role="group" aria-label="Action buttons"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample" data-title="Copy code sample"></button></div><pre class="" translate="no" dir="ltr" is-upgraded="" syntax="HTML"><code translate="no" dir="ltr">&lt;img src="switch.svg" alt="light switch" ismap /&gt;
      </code></pre></devsite-code>
      <br />
    </p>,
    <p>This image has three attributes: <code translate="no" dir="ltr">src</code>, <code translate="no" dir="ltr">alt</code>, and <code translate="no" dir="ltr">ismap</code>. The <code translate="no" dir="ltr">src</code> attribute is used to provide the location of the SVG image asset. The <code translate="no" dir="ltr">alt</code> attribute provides alternative text describing the contents of the image. The <code translate="no" dir="ltr">ismap</code> attribute is Boolean, and doesn't require a value. This is just to explain what attributes are. We'll cover these attributes in more detail in the <a href="/learn/html/images">images</a> section.</p>,
    <p>While quoting attributes isn't always required, it sometimes is. If the value includes a space or special characters, quotes are needed. For this reason, quoting is always recommended. One or more spaces between attributes if the attribute value is quoted are not actually required, but, to be safe, and for legibility, quotes and spaces are recommended, and appreciated.</p>,
    <p>HTML is not case-sensitive, but some attribute values are. Values that are defined in the specification are case-insensitive. Strings that are not defined as keywords are generally case-sensitive, including <code translate="no" dir="ltr">id</code> and <code translate="no" dir="ltr">class</code> values.</p>,
    <p>Note that if an attribute value is case-sensitive in HTML, it is case-sensitive when used as part of an <a href="https://developer.mozilla.org/docs/Web/CSS/Attribute_selectors">attribute selector</a> in CSS and in JavaScript.</p>,
    <p>To make markup easier to read, it is recommended, but not required, to mark up your HTML using lowercase letters for all your element names and attribute names within your tags, and quote all attribute values.  If you ever hear the term "XHTML style markup", this, and self-closing empty elements with a slash at the end, is what that means.</p>,
    <p>
      <h2 style={{ color: "#93b9b2", fontSize: "1.3em" }}>
        Appearance of elements
      </h2>
    </p>,
    <p>The default appearance of semantic elements is set by user-agent stylesheets. Most browsers use actual stylesheets for this purpose, while others simulate them in code. The end result is the same. Although some constraints on user-agent stylesheets are set by the HTML specification, browsers have a lot of latitude, which means some differences exist between browsers.</p>,
    <p>The element you choose, and therefore the tags you use, should be appropriate for the content you are displaying, as tags have semantic meaning. The <a href="/learn/html/semantic-html">semantics</a>, or <code translate="no" dir="ltr">role</code>, of an element is important to assistive technologies and, in some cases, search engines.  HTML should be used to structure content, not to define the content's appearance. Appearance is the realm of CSS. While many elements that alter the appearance of content, such as <code translate="no" dir="ltr">&lt;h1&gt;</code>, <code translate="no" dir="ltr">&lt;strong&gt;</code>, and <code translate="no" dir="ltr">&lt;em&gt;</code>, have a semantic meaning, the appearance can and generally will be changed with author styles.</p>,
    <p>
      <devsite-code data-copy-event-label=""><div class="devsite-code-buttons-container" role="group" aria-label="Action buttons"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample" data-title="Copy code sample"></button></div><pre class="" translate="no" dir="ltr" is-upgraded="" syntax="HTML"><code translate="no" dir="ltr">&lt;h1&gt;This header has both &lt;strong&gt;strong&lt;/strong&gt; and &lt;em&gt;emphasized&lt;/em&gt; content&lt;/h1&gt;
      </code></pre></devsite-code>
    </p>

  ],
  "Document Structure": [
    <div>
      <p>HTML documents include a document type declaration and the <code translate="no" dir="ltr">&lt;html&gt;</code> root element. Nested in the <code translate="no" dir="ltr">&lt;html&gt;</code> element are the document head and document body. While the head of the document isn't visible to the sighted visitor, it is vital to make your site function. It contains all the meta information, including information for search engines and social media results, icons for the browser tab and mobile home screen shortcut, and the behavior and presentation of your content. In this section, you'll discover the components that, while not visible, are present on almost every web page.</p>

      <p>To create the MachineLearningWorkshop.com (MLW) site, start by including the components that should be considered essential for every web page: the type of document, the content's human language, the character set, and, of course, the title or name of the site or application.</p>
      <h2 style={{ color: "#93b9b2", fontSize: "1.3em" }}>Add to every HTML document</h2>
      <p>There are several features that should be considered essential for any and every web page. Browsers will still render content if these elements are missing, but include them. Always.</p>
    
      <code style={{ color: "#93b9b2" }}>&lt;!DOCTYPE html&gt;</code>
      <p>The first thing in any HTML document is the preamble. For HTML, all you need is <code translate="no" dir="ltr">&lt;!DOCTYPE html&gt;</code>. This may look like an HTML element, but it isn't. It's  a special kind of node called "doctype". The doctype tells the browser to use standards mode. If omitted, browsers will use a different rendering mode known as <a href="https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode" >quirks mode</a>. Including the doctype helps prevent quirks mode.</p>
      </div>
    ],
  "Metadata":
    "Metadata provides information about the HTML document like the title, character set, author, and viewport settings, usually inside the <head> tag.",
  "Semantic HTML":
    "Semantic HTML uses meaningful tags like <article>, <section>, <header>, and <footer> to describe the content’s purpose and structure.",
  "Headings and Sections":
    "Headings (<h1> to <h6>) define the structure and hierarchy of content sections on a page to improve readability and SEO.",
  "Attributes":
    "Attributes provide additional information about HTML elements, such as id, class, href, and src, to configure behavior or styling.",
  "Text Basics":
    "Basic text formatting tags include paragraphs (<p>), line breaks (<br>), emphasis (<em>), strong importance (<strong>), and more.",
  "Links":
    "Links are created using the <a> tag, allowing users to navigate between different pages or resources via the href attribute.",
  "Lists":
    "HTML supports ordered (<ol>), unordered (<ul>), and definition lists (<dl>) to organize items in a sequential or grouped manner.",
  "Navigation":
    "The <nav> element defines a section of navigation links, helping users understand and access the main site areas.",
  "Tablets":  // Possibly "Tables" is intended here? If not, adjust accordingly.
    "Tables (<table>) organize tabular data into rows and columns using <tr>, <th>, and <td> elements.",
  "Forms":
    "Forms collect user input with elements like <input>, <textarea>, <select>, and buttons, enabling interaction and data submission.",
  "Images":
    "Images are embedded with the <img> tag and can include alt text for accessibility and SEO benefits.",
  "Audio and Video":
    "HTML5 provides native multimedia support through the <audio> and <video> tags to embed sound and video content.",
  "Template, Slot, and Shadow":
    "Templates (<template>) define reusable HTML fragments; slots and shadow DOM enable component encapsulation and content projection.",
  "HTML APIs":
    "HTML APIs provide programmatic interfaces to enhance web functionality, such as drag-and-drop, geolocation, and offline storage.",
  "Focus":
    "Focus management controls which element is active and ready to receive input, improving keyboard navigation and accessibility.",
  "Other Inline Text Elements":
    "Inline elements like <span>, <code>, <mark>, <sub>, and <sup> allow precise text formatting within blocks.",
  "Details and Summary":
    "The <details> and <summary> elements create expandable sections to hide or reveal content dynamically.",
  "Dialog":
    "The <dialog> element provides native support for modal or non-modal dialog boxes in web applications.",
  "Conclusion and Next Steps":
    "This section summarizes key HTML concepts covered and provides guidance for further learning and practice."
};


// Helper to create valid HTML id from topic
const toId = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Htmlcontents = () => {
  return (
    <div

      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#000000ff",
        color: "#000000ff",
      }}
    >

{/* Side Panel */}
  <nav
    style={{
      width: "260px",
      height: "90vh",      // Full viewport height
      position: "fixed",    // Fix it to viewport
      top: 60,
      left: 0,
      borderRight: "1px solid #ddd",
      padding: "24px 16px",
      background: "#000000ff",
      overflowY: "auto",
    }}
  >
    <h2 style={{
      marginBottom: "16px",
      fontWeight: "bold",
      fontSize: "1.5em",
      color: "#93b9b2",
      textAlign: "center",
      textDecoration: "underline"
    }}>
      Contents
    </h2>
    <ul style={{
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}>
      {topics.map((topic) => (
        <li key={topic}>
          <a
            href={`#${toId(topic)}`}
            style={{
              textDecoration: "none",
              color: "#0366d6",
              fontSize: "16px",
              transition: "color 0.2s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#024b9a")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#0366d6")}
          >
            {topic}
          </a>
        </li>
      ))}
    </ul>
  </nav>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          paddingLeft: "430px",
          paddingRight: "120px", // To avoid overlap with side panel
          overflowY: "auto",
          color: "#93b9b2",
          fontSize: "26px",
          paddingTop: "10px",
          width: "100%",
          background: "#000000ff",
        }}
      >
        {topics.map((topic) => (
          <section
            key={topic}
            id={toId(topic)}
            style={{
              marginBottom: "48px",
              scrollMarginTop: "130px", // Adjust this if you have a fixed header
            }}
          >
            <h2>{topic}</h2>
            <p style={{ color: "#ffffffff", fontSize: "16px", width: "81%", lineHeight: "1.6", padding: "1em" }}>
              {topicContent[topic]}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Htmlcontents;
