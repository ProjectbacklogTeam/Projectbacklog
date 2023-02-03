<?php if(isset($_SESSION['error'])) :?>
<div class="error">
  <h3>
    <?php
        echo $_SESSION['error'];
        unset($_SESSION['error']);
    ?>
  </h3>
</div>
<?php endif ?>