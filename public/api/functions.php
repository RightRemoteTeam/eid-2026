<?php
function breakParagraphSafely($paragraph, $width) {
 

  $wordWrapFunction = 'mb_wordwrap';
  $line_array = explode("\n",  $paragraph);
  $lines = array_slice($line_array,0,5);
  $formattedLines = []; 
  
  $test = [];
  foreach ($lines as $line) {
    $words = explode(" ",  $line);
    $currentLine = "";
     foreach ($words as $word) {
      $test[] = $word;
      if (mb_strlen($currentLine . " " . $word, 'UTF-8') > $width) {
        // Check if the current line contains a single word
        if (count(explode(" ", $currentLine)) === 1) {
          // If single word exceeds width, break it (for long words)
          $wrappedWord = $wordWrapFunction($word, $width, "\n", true);
          $formattedLines[] = $wrappedWord; // Add wrapped word as separate line
        } else {
          $formattedLines[] = $currentLine;
          $currentLine = "";

          // Wrap the current word and add it to the new line
          $wrappedWord = $wordWrapFunction($word, $width, "\n", true);
          $currentLine .= $wrappedWord;
        }
      } else {
        //word to the current line
        $currentLine .= " " . $word;
      }
    }
    // Add the last line (if any)
    if ($currentLine !== "") {
      $formattedLines[] = $currentLine;
    }
    $currentLine .= "\n";
  }
 
  return $formattedLines;
}

function centerText($image, $draw, $text, $offsetY) {
    $imageWidth = $image->getImageWidth();
    $lines = breakParagraphSafely($text, 55);
    $lineHeight = $image->queryFontMetrics($draw, "X")['textHeight'];
    $y = $offsetY;
    $count = 0;
    foreach ($lines as $line) {
        $textWidth = $image->queryFontMetrics($draw, $line)['textWidth'];
        $x = ($imageWidth - $textWidth) / 2;
        $image->annotateImage($draw, $x, $y, 0, $line);
        $y += $lineHeight;
    }
    
    return $y;
}

function mb_wordwrap($string, $width=75, $break="\n", $cut = false) {
    if (!$cut) {
        $regexp = '#^(?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){'.$width.',}\b#U';
    } else {
        $regexp = '#^(?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){'.$width.'}#';
    }
    $string_length = mb_strlen($string,'UTF-8');
    $cut_length = ceil($string_length / $width);
    $i = 1;
    $return = '';
    while ($i < $cut_length) {
        preg_match($regexp, $string,$matches);
        $new_string = $matches[0];
        $return .= $new_string.$break;
        $string = substr($string, strlen($new_string));
        $i++;
    }
    return $return.$string;
}

function check_card($card)
{
  
  $cards = array('1','2','3','4','5','6','7','8','9','10');
  if (in_array($card, $cards)) {
    return $card;
  }
  return null;
}
?>

