<div class="container">
  <div class="header">
    {{#link-to 'sign_out' class="sign-out-link"}}Sign out{{/link-to}}
  </div>
	<div class="main">
		{{outlet}}
	</div>
</div>
{{outlet modal}}