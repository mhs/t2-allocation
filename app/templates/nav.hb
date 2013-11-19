<a href="#" class="logo"></a>
<div class="user-actions">
  {{#each link in view.bottom_links}}
    <div class="global-settings">
      <a {{bindAttr href="link.url"}} {{bindAttr title="link.link_text"}}>
        <i>{{link.icon}}</i>
      </a>
    </div>
  {{/each}}
  <div class="global-logout"><a href="/#/sign_out"><i>&#59201;</i></a></div>
</div>
<ul>
  {{#each link in view.top_links}}
    <li {{bindAttr class="link.classes"}}>
      <a {{bindAttr href="link.url"}} {{bindAttr title="link.link_text"}}>
        <i>{{link.icon}}</i>
        {{link.title}}
      </a>
    </li>
  {{/each}}
</ul>
