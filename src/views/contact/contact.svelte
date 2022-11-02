<style type="text/scss">
form {
    max-width: 600px;
    margin: 0 auto;
}
h2 {
    border-bottom: solid var(--border-size-m) var(--je-red);
    display: inline-block;
}
</style>

<section id="contact" class="section-container">
    <div class="text-center mb-4 pt-6">
        <h2 class="title text-center pb-1 my-12 mb-1">Let's Chat</h2>
    </div>
    <form id="contactform" action="https://formsubmit.io/send/evans.james00@gmail.com" method="POST">
        <input name="_redirect" type="hidden" id="name" value="https://www.jamesevans.dev/#/contact/success">

        <label for="name">Name</label>
        <input name="name" placeholder="First and Last name" type="text" id="name" required>

        <label for="business-name">Business Name</label>
        <input name="business-name" placeholder="Your Business or Organization's name" type="text" id="b-name" required>

        <label for="message">Message</label>
        <textarea name="message" placeholder="Hi James, I'm interested in having a website built..." id="message" required></textarea>

        <input name="_formsubmit_id" type="text" style="display:none">
        <input value="Submit" type="submit">
    </form>
</section>
