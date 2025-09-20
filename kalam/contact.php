<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HLP</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <?php include_once "header.php" ?>
  <main>
    <section class="hero">
      <h1 class="glow-hacker">Contact Us</h1>
      <p>Have questions, feedback, or need help? Fill out the form below or reach out directly!</p>
    </section>
    <section class="contact-section">
      <form class="contact-form" id="contactForm" action="https://formspree.io/f/xovlarvq" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </main>
  <script src="contact.js"></script>
  <?php include_once "footer.php" ?>  
</body>
</html> 
