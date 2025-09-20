<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HLP-Create Account</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <?php include_once "header.php" ?> 
  <main>
    <section class="hero">
      <h1 class="glow-hacker">Create Account</h1>
      <div class="auth-container">
        <div class="auth-column">
          <h2>Create Account</h2>
          <form id="register-form" class="register-form">
            <label for="register-email">Email ID</label>
            <input type="email" id="register-email" name="register-email" required>
            <label for="register-password">Password</label>
            <input type="password" id="register-password" name="register-password" required>
            <button type="submit">Create Account</button>
          </form>
          <div id="register-message" class="auth-message"></div>
          <p style="text-align: center; margin-top: 20px; color: #00ff99;">
            Already have an account? <a href="login.php" style="color: #00ff99; text-decoration: none;">Login here</a>
          </p>
        </div>
      </div>
    </section>
  </main>
  <script src="create.js"></script>
  <?php include_once "footer.php" ?>  
</body>
</html>
