import { Platform } from 'react-native';

export const animationProps = {
  HIDE_POSITION: 400,
  SHOW_POSITION: 0,
  DURATION: 400,
};

export const DEFAULT_SPACING = 1.63;
export const MIN_ESTATE_PRICE = 0;
export const MAX_ESTATE_PRICE = 20000;
export const MIN_ESTATE_AREA = 0;
export const MAX_ESTATE_AREA = 1000;

// Configuracoes de elevacao (sombra) para os componentes do sistema. (Máximo: 24)
// No Android os numeros precisam ser um pouco maiores porque a biblioteca calcula a sombra do iOS
// de forma diferente.
export const BIG_COMPONENT_ELEVATION = Platform.OS === 'ios' ? 20 : 24;

export const SCHEDULED_STATUS = ['Pendente', 'Confirmado'];
export const CANCELLED_VISIT_STATUS = [
  'Cancelado pelo Cliente',
  'Cancelado pelo Corretor',
];
export const EXPIRED_VISIT_STATUS = ['Expirado'];
export const CAMERA_BUTTONS_TYPES = {
  CAPTURE: 'capture',
  LEFT: 'left',
  RIGHT: 'right',
};

// Documentação pendente   - id 1 - vai para a tela de documentação
// Proposta em andamento   - id 2 - vai para a tela de análise de documentação e crédito
// Documentação rejeitada  - id 3 - vai para a tela de documentação
// Proposta aceita         - id 4 - esse status equivale ao Assinar na tela de contratos. Não precisa ser exibido na aba de proposta
// Proposta rejeitada      - id 6 - vai para a tela de documentação
// Proposta assinada       - id 7 - esse status equivale ao Contrato Vigente na tela de contratos. Não precisa ser exibido na aba de proposta
export const PROPOSAL_STATUS_META_INFO = {
  '1': { routeName: 'PendingDocumentationScreen' },
  '2': { routeName: 'InProgressProposalScreen' },
  '3': { routeName: 'PendingDocumentationScreen' },
  '4': { routeName: 'ToSignContractScreen' },
  '6': { routeName: 'PendingDocumentationScreen' },
  '7': { routeName: 'CurrentContractScreen' },
};

export const API_ERROR_TYPES = {
  GENERIC: 'GENERIC',
  NETWORK: 'NETWORK',
};

export const API_ERROR_MESSAGES = {
  GENERIC:
    'Alguma coisa deu erro em nossos servidores, em breve tudo estará ok. Tente mais tarde!',
  NETWORK:
    'Parece que não há internet! Verifique a sua conexão para continuar navegando.',
};

export const LIMITE_CLIQUE_CLUSTER = 30

// Funções relativa à busca no mapa
export const BELO_HORIZONTE = {
  latitude: -19.9548763,
  longitude: -43.9624766
}

export const toRegion = (position) => {
  return {
    ...position,
    // Maior altitude
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421

    // Menos altitude
    latitudeDelta: 0.0090,
    longitudeDelta: 0.00120,
  }
}
