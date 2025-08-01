{ pkgs, ... }: {
  channel = "stable-25.05";

  packages = with pkgs; [
    zsh
    git
    curl
    zip
    nodejs_latest
  ];

  env = { };
  idx = {
    extensions = [
      "vue.volar"
      "dbaeumer.vscode-eslint"
      "EditorConfig.EditorConfig"
      "esbenp.prettier-vscode"
    ];

    previews = {
      enable = true;
      previews = { };
    };

    workspace = {
      onCreate = {
        ohmyzsh-install = ''
          echo [onCreate] Instalando o OhMyZsh...

          export RUNZSH=no
          export CHSH=no

          OHMYZSH="$HOME/.oh-my-zsh"

          if [ ! -d "$OHMYZSH" ]; then
            sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

            echo "Alterando tema para 'jonathan'..."
            sed -i 's/ZSH_THEME=".*"/ZSH_THEME="jonathan"/' ~/.zshrc

            echo "Inserindo ZSH_DISABLE_COMPFIX=true..."
            sed -i '/^source \$ZSH\/oh-my-zsh.sh/i ZSH_DISABLE_COMPFIX=true' ~/.zshrc
          else
            echo "OhMyZsh já está instalado."
          fi
        '';
      };
      onStart = { };
    };
  };
}
