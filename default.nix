with import <nixos> {}; {
  schedule-devenv = stdenv.mkDerivation {
    name = "schedule-devenv";
    buildInputs = [ nodejs gnumake python inotify-tools jq ];
  };
}
