exec('git status', function(err, stdout, stdrr) {
  if (show.match("nothing to commit")) {
  }
  else if (show.match("Changes not staged for commit")){
    console.log("Seems there are changes\nto commit still.")
  } else console.log("Hmm, can't find\ncommitted changes.")