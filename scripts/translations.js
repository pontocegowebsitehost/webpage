/* 
 * PontoCego Security - Translation System
 * Bilingual support: Portuguese (default) and English
 */

const translations = {
  pt: {
    // Navbar
    navHome: "Início",
    navServices: "Serviços",
    navAbout: "Sobre",
    navTeam: "Equipe",
    navContact: "Contato",
    
    // Hero Section
    heroTitle: "PontoCego Security",
    heroSubtitle: "Cibersegurança sem pontos cegos",
    heroTagline: "Protegendo o que você não pode ver",
    btnLearnMore: "Saiba Mais",
    btnGetQuote: "Solicitar Orçamento",
    
    // Services Section
    servicesTitle: "Nossos Serviços",
    servicesSubtitle: "Soluções de cibersegurança abrangentes para proteger o seu negócio",

    service1Title: "Pentest",
    service1Desc: "Simulamos ataques cibernéticos reais para identificar vulnerabilidades antes que agentes maliciosos possam explorá-las. Cada projeto segue uma metodologia estruturada e alinhada a frameworks modernos, garantindo uma cobertura completa da sua superfície de ataque.",
    service1Desc2: "Nossos testes de penetração combinam reconhecimento automatizado, exploração manual e análise pós-exploração para avaliar não apenas como um invasor poderia obter acesso, mas também o impacto potencial para o negócio caso isso ocorra. Os testes podem ser conduzidos em ambientes controlados ou em sistemas de produção, sob rigorosas medidas de segurança para evitar interrupções.",

    service2Title: "Avaliação de Vulnerabilidades",
    service2Desc: "Nossas avaliações de vulnerabilidades oferecem uma visão completa da postura de segurança da sua organização, identificando fraquezas em sistemas, redes e aplicações. Utilizamos scanners líderes de mercado (como Nessus, OpenVAS, Nmap e Nikto), combinados com validação manual, para eliminar falsos positivos e garantir resultados precisos e acionáveis.",
    service2Desc2: "Cada vulnerabilidade é analisada com base em sua pontuação CVSS, grau de explorabilidade e contexto de negócio, permitindo priorizar as correções de forma eficiente e orientada ao risco.",

    service3Title: "Consultoria em Cibersegurança",
    service3Desc: "Nossos serviços de consultoria oferecem expertise estratégica e técnica para ajudar organizações a projetar, implementar e manter programas de cibersegurança robustos. Alinhamos suas operações a frameworks reconhecidos internacionalmente, como NIST CSF, ISO 27001 e CIS Controls, garantindo conformidade e resiliência.",
    service3Desc2: "Seja para estabelecer políticas de governança, aprimorar sua arquitetura de segurança ou se preparar para auditorias, fornecemos orientações baseadas em experiência prática e profundo conhecimento técnico.",

    service4Title: "Plataforma de Conscientização sobre Phishing",
    service4Desc: "Os usuários continuam sendo um dos pontos de entrada mais explorados em ataques cibernéticos. Nossa próxima Plataforma de Conscientização sobre Phishing foi desenvolvida para testar, medir e aprimorar a resiliência dos colaboradores por meio de campanhas de phishing controladas, módulos de aprendizado adaptativo e análises detalhadas.",
    service4Desc2: "Com o uso de templates de e-mail realistas, simulações de payloads e acompanhamento comportamental, as organizações poderão avaliar como seus colaboradores reagem a tentativas de engenharia social e oferecer treinamentos personalizados em tempo real para corrigir vulnerabilidades humanas.",
    comingSoon: "Em breve",

    service1Bullet1: "Testes de penetração em aplicações web (OWASP Top 10, testes de API, falhas de autenticação e autorização)",
    service1Bullet2: "Testes de penetração em redes e infraestrutura (interna/externa, firewalls, VPNs e redes sem fio)",
    service1Bullet3: "Avaliação de ambientes em nuvem (configurações e permissões de identidade em AWS, Azure e GCP)",
    service1Bullet4: "Relatórios técnicos e executivos detalhados com evidências de exploração, classificação de riscos e plano de correção priorizado",

    service2Bullet1: "Varredura automatizada de infraestrutura, hosts e aplicações",
    service2Bullet2: "Verificação manual de vulnerabilidades críticas",
    service2Bullet3: "Priorização baseada em risco e validação de explorabilidade",
    service2Bullet4: "Plano de correção detalhado com ações práticas",
    service2Bullet5: "Reavaliações periódicas para medir o progresso e manter a melhoria contínua",

    service3Bullet1: "Avaliação de postura de segurança e análise de riscos",
    service3Bullet2: "Desenvolvimento de políticas, procedimentos e estruturas de governança em cibersegurança",
    service3Bullet3: "Conformidade regulatória e preparação para auditorias (LGPD e GDPR)",
    service3Bullet4: "Design e fortalecimento de arquitetura de segurança (segmentação de rede, controle de acesso, zero trust)",
    service3Bullet5: "Planejamento e simulação de resposta a incidentes, exercícios de mesa e prontidão forense",

    service4Bullet1: "Simulações de phishing realistas e baseadas em dados, com payloads personalizados",
    service4Bullet2: "Campanhas segmentadas por departamento, nível de risco ou função",
    service4Bullet3: "Relatórios detalhados de conscientização e comportamento",
    service4Bullet4: "Plataforma de treinamentos automatizados em vídeo",
    service4Bullet5: "Integração com sistemas de e-mail corporativos",

    
    // Why Choose Us
    whyTitle: "Por Que Escolher a PontoCego",
    whySubtitle: "Experiência, dedicação e resultados que fazem a diferença",
    
    why1Title: "Expertise Comprovada",
    why1Desc: "Nossa equipe reúne profissionais com formação internacional e sólida experiência no mercado de segurança cibernética e de desenvolvimento de software. Atuamos em projetos complexos, aplicando metodologias avançadas para identificar vulnerabilidades, proteger sistemas críticos e antecipar ameaças. A combinação de conhecimento técnico, visão estratégica e prática real garante soluções confiáveis e eficazes para nossos clientes.",
    
    why2Title: "Abordagem Personalizada",
    why2Desc: "Cada organização possui desafios e riscos únicos. Por isso, desenvolvemos estratégias sob medida, alinhadas ao perfil do negócio, aos objetivos e à infraestrutura tecnológica de cada cliente. Nosso trabalho vai além da identificação de vulnerabilidades: criamos planos de ação detalhados que equilibram segurança, eficiência operacional e mitigação de riscos.",
    
    why3Title: "Resultados Mensuráveis",
    why3Desc: "Entregamos análises detalhadas, relatórios técnicos e recomendações práticas que podem ser implementadas imediatamente. Nosso foco é gerar impacto real na segurança da sua empresa, ajudando a reduzir riscos cibernéticos, aumentar a resiliência dos sistemas e oferecer confiança a todos.",

    // Our Impact Section
    impactTitle: "Nosso Impacto",
    impactSubtitle: "Resultados reais que demonstram nosso compromisso com a segurança.",
    impactVulns: "20+ vulnerabilidades remediadas",
    impactBreaches: "0 violações pós-engajamento",
    impactContinents: "Clientes em 3 continentes",
    
    // About Page
    aboutTitle: "Sobre Nós",
    aboutSubtitle: "Conheça a PontoCego Security",
    
    whoWeAreTitle: "Quem Somos",
    whoWeAreText1: "A PontoCego Security é uma empresa brasileira de cibersegurança dedicada a ajudar organizações de todos os portes a construírem ambientes digitais mais seguros e resilientes. Somos especializados em proteger pequenas e médias empresas em todo o mundo, oferecendo serviços remotos de cibersegurança de alta qualidade, acessíveis e que eliminam as barreiras de distância e complexidade.",
    whoWeAreText2: "Fundada por profissionais apaixonados por eliminar os “pontos cegos” que deixam as empresas vulneráveis, a PontoCego Security foi criada para reduzir a crescente diferença de segurança entre grandes corporações e organizações menores. Nossa crença é simples: toda empresa merece proteção em nível corporativo, independentemente de seu tamanho, orçamento ou localização.",
    whoWeAreText3: "Oferecemos soluções práticas e orientadas por dados que combinam automação avançada, experiência manual e visão estratégica. Desde testes de intrusão (pentests) e avaliações de vulnerabilidades até revisão de código seguro e consultoria, nossos serviços são projetados para ajudar empresas a identificar, compreender e eliminar riscos antes que possam ser explorados. Nossa equipe trabalha de acordo com frameworks reconhecidos pelo setor — OWASP, MITRE ATT&CK e NIST — garantindo consistência, precisão e alinhamento com padrões globais em tudo o que fazemos. Juntos, unimos expertise técnica, experiência prática e uma missão compartilhada de tornar a cibersegurança mais acessível, transparente e eficaz.",
    
    missionTitle: "Nossa Missão",
    missionText: "Nossa missão é oferecer soluções de cibersegurança de classe mundial que capacitem pequenas e médias empresas a proteger seus ativos digitais, minimizar riscos cibernéticos e operar com confiança em um mundo digital em constante evolução.",
    missionText2: "Buscamos democratizar a cibersegurança, tornando a proteção avançada e a orientação estratégica acessíveis a qualquer empresa, não apenas àquelas que possuem grandes equipes internas de TI. Por meio de pesquisa contínua, colaboração e aprimoramento constante, ajudamos organizações a fortalecer suas defesas, atender a requisitos de conformidade e construir resiliência duradoura contra ameaças modernas.",
    
    valuesTitle: "Nossos Valores",
    value1Title: "Excelência",
    value1Desc: "Somos movidos pela precisão técnica, dedicação e compromisso com resultados. Cada projeto é conduzido com o mesmo rigor e atenção, seja para uma startup local ou para um cliente internacional. Refinamos constantemente nossas metodologias para garantir exatidão, qualidade e melhorias mensuráveis na postura de segurança de nossos clientes.",
    value2Title: "Integridade",
    value2Desc: "A confiança está no centro do nosso trabalho. Atuamos com honestidade, transparência e responsabilidade em todos os projetos, protegendo não apenas sistemas, mas também relacionamentos e reputações. Valorizamos a comunicação aberta e a conduta ética como princípios inegociáveis.",
    value3Title: "Inovação",
    value3Desc: "A cibersegurança nunca para e nós também não. Nossa equipe pesquisa continuamente novas técnicas de ataque, ferramentas e tendências para se manter à frente das ameaças. Investimos em educação contínua e desenvolvimento profissional, possuindo e buscando certificações como CEH, eJPT e HTB CPTS, garantindo que nossa expertise permaneça na vanguarda da cibersegurança moderna.",
    
    btnMeetTeam: "Conheça Nossa Equipe",
    
    // Team Page
    teamTitle: "Nossa Equipe",
    teamSubtitle: "Especialistas dedicados à sua segurança digital",
    
    member1Name: "Andressa Mathias",
    member1Role: "Fundadora & Gerente de Operações",
    member1Bio: "Com mais de 5 anos de experiência em desenvolvimento web, ela aplica práticas e padrões de segurança para entregar soluções confiáveis. Na PontoCego, gerencia as operações e o relacionamento com clientes, garantindo que cada projeto atenda aos mais altos padrões de qualidade, eficiência e segurança.",

    member2Name: "Cezar Pedroso",
    member2Role: "Pentester & Pesquisador de Segurança",
    member2Bio: "Cezar é especializado em segurança de redes e aplicações web, realizando avaliações de vulnerabilidades e testes de invasão alinhados aos padrões OWASP e NIST. Estuda Engenharia de Software e TI na William Penn University, com foco em aprimorar frameworks de segurança para pequenas e médias empresas.",

    member3Name: "Daniel Saguar Gonzalez",
    member3Role: "Analista de Segurança & Consultor",
    member3Bio: "Formado em TI pela William Penn University, Daniel atua em análise de vulnerabilidades, resposta a incidentes e consultoria em segurança cibernética. Ele aplica automação e frameworks consolidados para fortalecer a resiliência dos sistemas e apoiar clientes na melhoria de sua postura de segurança.",

    
    // Contact Page
    contactTitle: "Entre em Contato",
    contactSubtitle: "Estamos prontos para ajudar a proteger seu negócio",
    
    contactFormTitle: "Envie uma Mensagem",
    labelName: "Nome",
    labelEmail: "E-mail",
    labelMessage: "Mensagem",
    btnSend: "Enviar Mensagem",
    
    contactInfoTitle: "Informações de Contato",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    locationLabel: "Localização",
    locationText: "Curitiba, Brasil",
    
    successMessage: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    
    // Privacy Policy
    privacyTitle: "Política de Privacidade",
    privacyIntro: "Na PontoCego Security, levamos sua privacidade a sério.",
    privacySection1Title: "Coleta de Informações",
    privacySection1Text: "Coletamos apenas as informações necessárias para fornecer nossos serviços de forma eficaz.",
    privacySection1Bullet1: "Informações de contato (nome, e-mail, telefone)",
    privacySection1Bullet2: "Informações da empresa",
    privacySection1Bullet3: "Dados técnicos necessários para avaliações de segurança",
    privacySection2Title: "Uso de Informações",
    privacySection2Text: "Suas informações são usadas exclusivamente para melhorar nossos serviços e comunicação.",
    privacySection2Bullet1: "Prestação de serviços de cibersegurança",
    privacySection2Bullet2: "Comunicação sobre projetos e propostas",
    privacySection2Bullet3: "Melhorias nos nossos serviços",
    privacySection2Bullet4: "Cumprimento de obrigações legais",
    privacySection3Title: "Proteção de Dados",
    privacySection3Text: "Utilizamos as melhores práticas de segurança para proteger suas informações.",
    privacySection3Bullet1: "Criptografia de dados em trânsito e em repouso",
    privacySection3Bullet2: "Controles de acesso rigorosos",
    privacySection3Bullet3: "Auditorias regulares de segurança",
    privacySection3Bullet4: "Conformidade com LGPD e GDPR",
    privacySection4Title: "Compartilhamento de Dados",
    privacySection4Text: "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando:",
    privacySection4Bullet1: "Necessário para prestação de serviços contratados",
    privacySection4Bullet2: "Requerido por lei ou ordem judicial",
    privacySection4Bullet3: "Com seu consentimento explícito",
    privacySection5Title: "Seus Direitos",
    privacySection5Text: "Você tem o direito de:",
    privacySection5Bullet1: "Acessar seus dados pessoais",
    privacySection5Bullet2: "Corrigir informações incorretas",
    privacySection5Bullet3: "Solicitar a exclusão de seus dados",
    privacySection5Bullet4: "Revogar consentimentos",
    privacySection5Bullet5: "Portar seus dados para outro fornecedor",
    privacySection6Title: "Cookies e Tecnologias Similares",
    privacySection6Text: "Utilizamos cookies essenciais para o funcionamento do site e para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.",
    privacySection7Title: "Serviços de Terceiros",
    privacySection7Text: "Utilizamos o serviço Formspree para gerenciar o envio de formulários de contato. As informações fornecidas (como nome, e-mail e mensagem) são processadas pelos servidores do Formspree e encaminhadas para nossa equipe por e-mail. O Formspree atua apenas como intermediário técnico e não utiliza seus dados para fins próprios. Para mais detalhes, consulte a Política de Privacidade do Formspree.",
    privacySection8Title: "Contato",
    privacySection8Text: "Para questões sobre privacidade ou para exercer seus direitos, entre em contato conosco:",
    privacySection8Email: "E-mail: pontocegosec@proton.me",
    privacySection9Title: "Atualizações desta Política",
    privacySection9Text: "Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas através do nosso site ou por e-mail.",
    privacyLastUpdate: "Última atualização: 25 de outubro de 2025",
    
    // Client Companies Section
    clientCompaniesTitle: "Empresas que confiam na PontoCego",
    clientCompaniesSubtitle: "Empresas e organizações que confiam na segurança da PontoCego Security.",
    
    // FAQ Section
    faqTitle: "Perguntas Frequentes",
    faqSubtitle: "Tire suas dúvidas sobre nossos serviços de cibersegurança",
    faq1Question: "O que acontece depois que o teste termina?",
    faq1Answer: "Após a conclusão do teste, entregamos um relatório detalhado com todas as vulnerabilidades identificadas, evidências de exploração, classificação de riscos e recomendações práticas de correção. Oferecemos também suporte para esclarecimento de dúvidas e, se necessário, realizamos um novo teste para validar as correções implementadas.",
    faq2Question: "Como a PontoCego garante a confidencialidade dos dados do cliente?",
    faq2Answer: "A confidencialidade é fundamental em nosso trabalho. Assinamos acordos de confidencialidade (NDA) antes de qualquer projeto, aplicamos criptografia em todos os dados coletados e seguimos rigorosos protocolos de segurança. Todos os dados são armazenados de forma segura e deletados após a conclusão do projeto, conforme acordado com o cliente.",
    faq3Question: "É possível realizar um teste sem interromper os serviços da minha empresa?",
    faq3Answer: "Sim. Trabalhamos com protocolos que minimizam impactos operacionais. Nossos testes são cuidadosamente planejados e executados em horários acordados, com controles rigorosos para evitar interrupções. Para ambientes críticos, podemos realizar testes em ambientes de homologação ou utilizar técnicas não-intrusivas.",
    faq4Question: "Onde a PontoCego atua?",
    faq4Answer: "Atuamos globalmente de forma remota, atendendo empresas em diversos países. Nossa sede está no Brasil, mas oferecemos serviços de cibersegurança para organizações em todo o mundo, sem limitações geográficas. Nossos clientes estão distribuídos em 3 continentes.",
    faq5Question: "O que é um pentest e por que minha empresa precisa dele?",
    faq5Answer: "Pentest (teste de penetração) é uma avaliação de segurança onde simulamos ataques reais para identificar vulnerabilidades em sistemas, redes e aplicações. É essencial porque permite descobrir e corrigir falhas de segurança antes que atacantes mal-intencionados as explorem, protegendo dados sensíveis e a reputação da empresa.",
    faq6Question: "Qual é o prazo médio de um projeto de pentest?",
    faq6Answer: "O prazo varia de acordo com o escopo e complexidade do projeto. Em média, um pentest de aplicação web leva de 1 a 2 semanas, enquanto testes mais abrangentes (incluindo infraestrutura e redes) podem levar de 2 a 4 semanas. O relatório final é entregue em até 5 dias úteis após a conclusão dos testes.",
    faq7Question: "É possível contratar apenas um diagnóstico técnico rápido?",
    faq7Answer: "Sim. Oferecemos avaliações de vulnerabilidades rápidas e diagnósticos de segurança que podem ser concluídos em poucos dias. Esses serviços são ideais para empresas que buscam uma visão inicial da sua postura de segurança ou precisam de uma análise pontual antes de investir em um pentest completo.",
    
    // Blog Section
    navBlog: "Blog",
    blogTitle: "Blog",
    blogSubtitle: "Insights e conhecimentos sobre cibersegurança",
    blogPost1Title: "Por Dentro de um Pentest: Etapas, Metodologia e Boas Práticas",
    blogPost1Excerpt: "Entenda como funciona um teste de intrusão profissional, desde o planejamento até o relatório final. Descubra quais metodologias são usadas, como as vulnerabilidades são exploradas e o que realmente diferencia um pentest técnico de uma simples varredura automatizada.",
    blogPost2Title: "Como a LGPD Afeta a Segurança da Sua Empresa",
    blogPost2Excerpt: "A Lei Geral de Proteção de Dados (LGPD) mudou o modo como empresas lidam com informações sensíveis. Saiba quais são os principais requisitos de segurança, como evitar penalidades e o papel dos testes de vulnerabilidade na conformidade com a legislação.",
    blogPost3Title: "Ciberataques em Ascensão: As Ameaças Mais Comuns em 2025",
    blogPost3Excerpt: "Os ataques cibernéticos estão se tornando mais sofisticados e frequentes. Conheça as principais tendências e vetores de ataque observados em 2025 — e o que sua organização pode fazer agora para fortalecer a defesa antes de ser o próximo alvo.",
    btnReadMore: "Ler Mais",
    blogPostAuthor: "Equipe PontoCego Security",
    blogPost1Date: "Publicado em 10 de outubro de 2025",
    blogPost2Date: "Publicado em 15 de outubro de 2025",
    blogPost3Date: "Publicado em 20 de outubro de 2025",
    btnBackToBlog: "Voltar ao Blog",
    relatedPostsTitle: "Artigos Relacionados",
    
    // Blog Post 1 Content
    blogPost1Section1Title: "O que é um Pentest?",
    blogPost1Section1Text: "Um teste de penetração, ou pentest, é uma avaliação de segurança autorizada que simula ataques reais contra sistemas, redes ou aplicações. Diferentemente de scanners automatizados, um pentest combina ferramentas sofisticadas com expertise humana para identificar vulnerabilidades complexas que máquinas sozinhas não conseguem detectar. O objetivo é descobrir falhas de segurança antes que atacantes mal-intencionados as explorem, protegendo assim dados sensíveis, reputação empresarial e continuidade dos negócios.",
    blogPost1Section2Title: "As Etapas de um Pentest Profissional",
    blogPost1Section2Text: "Um teste de penetração bem estruturado segue uma metodologia clara, geralmente alinhada a frameworks reconhecidos como OWASP, PTES (Penetration Testing Execution Standard) e NIST. As principais etapas incluem:",
    blogPost1Bullet1: "Planejamento e Definição de Escopo: Definição dos sistemas a serem testados, objetivos, cronograma e regras de engajamento.",
    blogPost1Bullet2: "Reconhecimento: Coleta de informações sobre o alvo, incluindo infraestrutura, tecnologias utilizadas e possíveis vetores de ataque.",
    blogPost1Bullet3: "Análise de Vulnerabilidades: Identificação de pontos fracos usando scanners automatizados e análise manual detalhada.",
    blogPost1Bullet4: "Exploração: Tentativa controlada de explorar as vulnerabilidades encontradas para avaliar o impacto real.",
    blogPost1Bullet5: "Pós-Exploração: Avaliação do alcance do comprometimento, incluindo acesso a dados sensíveis e movimentação lateral.",
    blogPost1Bullet6: "Relatório e Recomendações: Documentação detalhada de todas as descobertas, evidências de exploração e orientações práticas de correção.",
    blogPost1Section3Title: "Metodologias e Frameworks",
    blogPost1Section3Text: "Profissionais de pentest seguem metodologias consolidadas para garantir consistência, cobertura completa e resultados confiáveis. Entre os frameworks mais utilizados estão o OWASP Testing Guide para aplicações web, o MITRE ATT&CK para técnicas de ataque em ambientes corporativos, e o PTES para estruturação completa do processo de teste. Essas metodologias orientam cada etapa, desde o planejamento até a entrega do relatório final.",
    blogPost1Section4Title: "Pentest vs. Varredura Automatizada",
    blogPost1Section4Text: "Ferramentas automatizadas são úteis para identificar vulnerabilidades conhecidas de forma rápida, mas possuem limitações significativas. Elas geram muitos falsos positivos, não entendem o contexto do negócio e não conseguem explorar vulnerabilidades encadeadas que exigem raciocínio lógico. Um pentest profissional complementa a automação com análise manual profunda, exploração real de vulnerabilidades e avaliação do impacto ao negócio, oferecendo insights que vão muito além de uma simples lista de falhas técnicas.",
    blogPost1Section5Title: "Conclusão",
    blogPost1Section5Text: "Investir em um pentest profissional é fundamental para empresas que levam a segurança a sério. Ao simular ataques reais e identificar vulnerabilidades antes que sejam exploradas, as organizações podem se proteger de forma proativa, reduzir riscos e garantir a confiança de seus clientes. Se você deseja proteger sua empresa com testes de penetração de alta qualidade, entre em contato com a PontoCego Security.",
    
    // Blog Post 2 Content
    blogPost2Section1Title: "O que é a LGPD?",
    blogPost2Section1Text: "A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) é a legislação brasileira que regulamenta o tratamento de dados pessoais por organizações públicas e privadas. Inspirada no GDPR europeu, a LGPD estabelece diretrizes rigorosas sobre coleta, armazenamento, processamento e compartilhamento de dados pessoais, garantindo transparência, segurança e respeito à privacidade dos titulares. Empresas que não cumprem a LGPD estão sujeitas a penalidades que incluem multas de até 2% do faturamento anual (limitadas a R$ 50 milhões por infração), além de sanções administrativas e danos à reputação.",
    blogPost2Section2Title: "Principais Requisitos de Segurança da LGPD",
    blogPost2Section2Text: "A LGPD exige que empresas adotem medidas técnicas e administrativas para proteger dados pessoais contra acessos não autorizados, vazamentos e incidentes de segurança. Embora a lei não especifique tecnologias exatas, ela estabelece princípios claros que incluem:",
    blogPost2Bullet1: "Segurança: Uso de controles técnicos adequados para proteger dados contra tratamento não autorizado ou ilícito.",
    blogPost2Bullet2: "Prevenção: Adoção de medidas para prevenir danos aos titulares, incluindo avaliações de impacto e gestão de riscos.",
    blogPost2Bullet3: "Responsabilização e Prestação de Contas: Demonstração de conformidade e adoção de boas práticas de governança de dados.",
    blogPost2Bullet4: "Transparência: Garantia de que titulares tenham acesso claro a informações sobre como seus dados são tratados.",
    blogPost2Bullet5: "Resposta a Incidentes: Capacidade de detectar, comunicar e mitigar incidentes de segurança em tempo hábil.",
    blogPost2Section3Title: "Como Evitar Penalidades",
    blogPost2Section3Text: "Para evitar multas e sanções, as empresas devem implementar um programa de conformidade estruturado que inclua mapeamento de dados, avaliação de riscos, políticas de privacidade claras e treinamento de colaboradores. É fundamental nomear um Encarregado de Proteção de Dados (DPO), estabelecer processos de resposta a incidentes e realizar auditorias regulares de segurança. A LGPD valoriza a adoção de boas práticas e a capacidade de demonstrar conformidade contínua, não apenas pontual.",
    blogPost2Section4Title: "O Papel dos Testes de Vulnerabilidade na Conformidade",
    blogPost2Section4Text: "Testes de penetração e avaliações de vulnerabilidades são ferramentas essenciais para garantir que medidas de segurança técnicas estejam efetivamente protegendo dados pessoais. Um pentest identifica falhas que poderiam permitir acessos não autorizados a informações sensíveis, enquanto avaliações de vulnerabilidades mapeiam fraquezas em sistemas, redes e aplicações. Esses serviços ajudam empresas a atender aos requisitos de segurança da LGPD, demonstrar responsabilização e reduzir riscos de incidentes que poderiam resultar em penalidades ou danos reputacionais.",
    blogPost2Section5Title: "Conclusão",
    blogPost2Section5Text: "A conformidade com a LGPD não é apenas uma obrigação legal, mas também uma oportunidade de fortalecer a confiança de clientes e parceiros. Investir em segurança cibernética, incluindo testes de vulnerabilidades e pentests, é um passo fundamental para garantir que sua empresa esteja protegida e em conformidade com a legislação. Entre em contato com a PontoCego Security para saber como podemos ajudar sua organização a atender aos requisitos da LGPD.",
    
    // Blog Post 3 Content
    blogPost3Section1Title: "O Cenário de Ameaças em 2025",
    blogPost3Section1Text: "O ano de 2025 tem sido marcado por um aumento significativo na sofisticação e frequência de ataques cibernéticos. Grupos de ransomware estão explorando cadeias de suprimentos, atacantes patrocinados por estados estão mirando infraestruturas críticas, e cibercriminosos comuns estão utilizando inteligência artificial para automatizar e aprimorar suas campanhas. Pequenas e médias empresas continuam sendo alvos preferenciais, muitas vezes devido a defesas inadequadas e falta de conscientização sobre riscos.",
    blogPost3Section2Title: "Principais Vetores de Ataque",
    blogPost3Section2Text: "Em 2025, observamos a predominância dos seguintes vetores de ataque:",
    blogPost3Bullet1: "Ransomware como Serviço (RaaS): Plataformas que permitem até criminosos inexperientes lançarem campanhas de ransomware sofisticadas, aumentando drasticamente o volume de ataques.",
    blogPost3Bullet2: "Phishing Avançado com IA: Mensagens geradas por inteligência artificial que imitam perfeitamente linguagem corporativa, tornando ataques de engenharia social muito mais convincentes.",
    blogPost3Bullet3: "Exploração de Vulnerabilidades Zero-Day: Atacantes exploram falhas ainda não corrigidas em softwares populares, ganhando acesso antes que empresas possam aplicar patches.",
    blogPost3Bullet4: "Ataques à Cadeia de Suprimentos: Comprometimento de fornecedores ou parceiros para alcançar organizações maiores, como visto em incidentes recentes de alto impacto.",
    blogPost3Bullet5: "Comprometimento de Credenciais: Uso de credenciais roubadas ou vazadas para acessar sistemas corporativos, muitas vezes sem acionar alertas de segurança.",
    blogPost3Section3Title: "Impactos e Consequências",
    blogPost3Section3Text: "Os impactos de ataques bem-sucedidos vão muito além de perdas financeiras imediatas. Empresas enfrentam interrupções operacionais prolongadas, perda de confiança de clientes, danos à reputação, custos regulatórios e, em alguns casos, fechamento permanente dos negócios. A média de tempo de inatividade após um ataque de ransomware é de 21 dias, e o custo médio de recuperação ultrapassa centenas de milhares de dólares.",
    blogPost3Section4Title: "Como Fortalecer a Defesa",
    blogPost3Section4Text: "Para se proteger contra ameaças modernas, organizações devem adotar uma abordagem em camadas que combine tecnologia, processos e pessoas:",
    blogPost3Defense1: "Avaliações Regulares de Vulnerabilidades: Identificar e corrigir fraquezas antes que atacantes as explorem.",
    blogPost3Defense2: "Testes de Penetração: Simular ataques reais para avaliar a eficácia das defesas e identificar pontos cegos.",
    blogPost3Defense3: "Treinamento de Conscientização: Educar colaboradores sobre phishing, engenharia social e boas práticas de segurança.",
    blogPost3Defense4: "Segmentação de Rede: Limitar a movimentação lateral de atacantes dentro da infraestrutura.",
    blogPost3Defense5: "Autenticação Multifator (MFA): Adicionar camadas extras de proteção contra comprometimento de credenciais.",
    blogPost3Defense6: "Plano de Resposta a Incidentes: Garantir que a organização saiba como reagir rapidamente em caso de ataque.",
    blogPost3Section5Title: "Conclusão",
    blogPost3Section5Text: "O cenário de ameaças cibernéticas em 2025 é mais desafiador do que nunca, mas empresas proativas podem se proteger efetivamente. Investir em avaliações de segurança, testes de penetração e conscientização de colaboradores é fundamental para construir resiliência contra ataques modernos. Entre em contato com a PontoCego Security para saber como podemos ajudar sua organização a se proteger contra as ameaças de 2025.",
    
    // Careers Page
    careers: "Carreiras",
    careersTitle: "Carreiras",
    careersSubtitle: "Faça parte da nossa equipe",
    careersPara1: "Na PontoCego Security, acreditamos que segurança é mais do que tecnologia — é propósito.",
    careersPara2: "Estamos em busca de profissionais e estudantes apaixonados por cibersegurança que queiram crescer conosco.",
    careersPara3: "Atualmente, temos oportunidades voluntárias voltadas a pesquisa, desenvolvimento e suporte técnico.",
    careersPara4: "Envie seu currículo para carreiras@pontocegosecurity.com",
    
    // Terms of Service
    termsOfService: "Termos de Serviço",
    termsTitle: "Termos de Serviço",
    termsSubtitle: "Última atualização: 01 de novembro de 2025",
    termsSection1Title: "1. Uso do Site",
    termsSection1Text: "Ao acessar e utilizar o site da PontoCego Security, você concorda em cumprir estes Termos de Serviço e todas as leis aplicáveis. O uso deste site é apenas para fins informativos e comerciais legítimos. Você não pode usar este site de maneira que possa danificá-lo, desabilitá-lo ou prejudicar seu funcionamento, ou de qualquer forma que interfira no uso de terceiros.",
    termsSection2Title: "2. Serviços",
    termsSection2Text: "A PontoCego Security oferece serviços de cibersegurança, incluindo testes de penetração, avaliações de vulnerabilidades e consultoria técnica. Todos os serviços são prestados mediante contrato específico que define escopo, cronograma, entregáveis e responsabilidades de ambas as partes. A prestação de serviços está condicionada à assinatura de Acordo de Não Divulgação (NDA) e Termo de Autorização de Testes, quando aplicável.",
    termsSection3Title: "3. Propriedade Intelectual",
    termsSection3Text: "Todo o conteúdo deste site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da PontoCego Security ou de seus licenciadores e está protegido por leis de propriedade intelectual. Os relatórios técnicos e documentos entregues aos clientes são de propriedade exclusiva do contratante, mas a metodologia, ferramentas e processos utilizados permanecem propriedade intelectual da PontoCego Security.",
    termsSection4Title: "4. Limitação de Responsabilidade",
    termsSection4Text: "A PontoCego Security não se responsabiliza por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou impossibilidade de uso deste site. Em relação aos serviços contratados, nossa responsabilidade está limitada ao valor pago pelo cliente no projeto específico. Todos os testes de segurança são conduzidos com cuidado profissional e sob rigorosos protocolos de segurança, mas não garantimos que tais testes não causarão interrupções temporárias em ambientes de produção, embora tomemos todas as precauções razoáveis para evitar impactos.",
    termsSection5Title: "5. Privacidade",
    termsSection5Text: "O uso de informações coletadas através deste site está sujeito à nossa Política de Privacidade. Todos os dados de clientes obtidos durante a prestação de serviços são tratados com estrita confidencialidade, conforme acordos de não divulgação e em conformidade com a LGPD (Lei Geral de Proteção de Dados).",
    termsSection6Title: "6. Contato",
    termsSection6Text: "Para questões relacionadas a estes Termos de Serviço, entre em contato conosco:",
    privacyPolicyLink: "Política de Privacidade",
    
    //impactNote added
    impactNote: "Nossos clientes confiam na PontoCego Security por resultados consistentes, recomendações práticas e um compromisso real com a segurança.",
    
    // Industries We Secure Section
    industriesTitle: "Setores que Protegemos",
    industriesSubtitle: "Protegendo empresas em setores críticos com soluções de cibersegurança sob medida",
    industry1: "Tech Startups",
    industry1Desc: "Protegendo inovação e propriedade intelectual",
    industry2: "Fintech",
    industry2Desc: "Garantindo segurança financeira e conformidade",
    industry3: "E-Commerce",
    industry3Desc: "Protegendo dados de clientes e transações",
    industry4: "SaaS",
    industry4Desc: "Segurança escalável para aplicações cloud",
    industry5: "Development Agencies",
    industry5Desc: "Assessoria em segurança para equipes de desenvolvimento",
    
    // CTA Banner
    ctaBannerTitle: "Vamos discutir seu ambiente e criar um plano de testes personalizado",
    ctaBannerText: "Nossa equipe está pronta para avaliar sua infraestrutura e desenvolver uma estratégia de segurança sob medida",
    ctaBannerButton: "Solicitar Orçamento",
    
    // Footer
    footerAbout: "Sobre a PontoCego",
    footerAboutText: "Especialistas em cibersegurança dedicados a proteger seu negócio contra ameaças digitais.",
    footerQuickLinks: "Links Rápidos",
    footerFollowUs: "Siga-Nos",
    footerCopyright: "© 2025 PontoCego Security. Todos os direitos reservados.",
    privacyPolicy: "Política de Privacidade"
  },
  
  en: {
    // Navbar
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navTeam: "Team",
    navContact: "Contact",
    
    // Hero Section
    heroTitle: "PontoCego Security",
    heroSubtitle: "Cybersecurity without blind spots",
    heroTagline: "Securing what you can't see",
    btnLearnMore: "Learn More",
    btnGetQuote: "Get a Quote",
    
    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive cybersecurity solutions to protect your business",

    service1Title: "Penetration Testing",
    service1Desc: "We simulate real-world cyberattacks to uncover vulnerabilities before threat actors can exploit them. Each engagement follows a structured methodology aligned with modern frameworks, ensuring comprehensive coverage of your attack surface.",
    service1Desc2: "Our penetration tests combine automated reconnaissance, manual exploitation, and post-exploitation analysis to assess not only how attackers could gain access, but also the potential business impact if they succeed. Testing can be conducted in controlled environments or production systems under strict safety measures to avoid disruption.",

    service2Title: "Vulnerability Assessment",
    service2Desc: "Our vulnerability assessments provide a complete snapshot of your organization’s security posture, identifying weaknesses across systems, networks, and applications. We leverage industry-leading scanners (e.g., Nessus, OpenVAS, Nmap, Nikto) combined with manual validation to eliminate false positives and ensure actionable insights.",
    service2Desc2: "Each vulnerability is analyzed based on its CVSS score, exploitability, and business context, allowing you to prioritize remediation where it matters most.",

    service3Title: "Cybersecurity Consulting",
    service3Desc: "Our consulting services deliver strategic and technical expertise to help organizations design, implement, and maintain robust cybersecurity programs. We align your operations with internationally recognized frameworks such as NIST CSF, ISO 27001, and CIS Controls, ensuring both compliance and resilience.",
    service3Desc2: "Whether you’re establishing governance policies, enhancing your security architecture, or preparing for audits, we provide guidance backed by hands-on experience and deep technical understanding.",

    service4Title: "Phishing Awareness Platform",
    service4Desc: "Humans remain one of the most exploited entry points in cyberattacks. Our upcoming Phishing Awareness Platform is designed to test, measure, and improve user resilience through controlled phishing campaigns, adaptive learning modules, and detailed analytics.",
    service4Desc2: "Using realistic email templates, payload simulations, and behavioral tracking, organizations can evaluate how employees react to social engineering attempts and deliver personalized micro-trainings to address weaknesses in real time.",
    comingSoon: "Coming Soon",

    service1Bullet1: "Web application penetration testing (OWASP Top 10, API testing, authentication, authorization flaws)",
    service1Bullet2: "Network and infrastructure penetration testing (internal/external, firewalls, VPNs, and wireless)",
    service1Bullet3: "Cloud environment assessments (AWS, Azure, GCP configurations and identity permissions)",
    service1Bullet4: "Detailed technical and executive reporting with exploitation evidence, risk ratings, and prioritized remediation",

    service2Bullet1: "Automated scanning of infrastructure, hosts, and applications",
    service2Bullet2: "Manual verification of high-impact vulnerabilities",
    service2Bullet3: "Risk-based prioritization and exploitability validation",
    service2Bullet4: "Comprehensive remediation plan with actionable steps",
    service2Bullet5: "Periodic reassessments to measure progress and maintain continuous improvement",

    service3Bullet1: "Security posture and risk assessment",
    service3Bullet2: "Development of cybersecurity policies, procedures, and governance frameworks",
    service3Bullet3: "Regulatory compliance and audit preparation (LGPD and GDPR)",
    service3Bullet4: "Security architecture design and hardening (network segmentation, access control, zero trust)",
    service3Bullet5: "Incident response planning, tabletop exercises, and forensic readiness",

    service4Bullet1: "Realistic, data-driven phishing simulations with custom payloads",
    service4Bullet2: "Campaigns segmented by department, risk level, or role",
    service4Bullet3: "Comprehensive awareness and behavioral reporting",
    service4Bullet4: "Automated video training platform",
    service4Bullet5: "Integration with email systems",
    
    // Why Choose Us
    whyTitle: "Why Choose PontoCego",
    whySubtitle: "Experience, dedication, and results that make a difference",

    why1Title: "Proven Expertise",
    why1Desc: "Our team brings together professionals with international training and solid experience in cybersecurity and software development. We work on complex projects, applying advanced methodologies to identify vulnerabilities, protect critical systems, and anticipate threats. The combination of technical knowledge, strategic vision, and hands-on experience ensures reliable and effective solutions for our clients.",

    why2Title: "Personalized Approach",
    why2Desc: "Every organization has unique challenges and risks. That's why we develop tailored strategies aligned with each client's business profile, objectives, and technological infrastructure. Our work goes beyond identifying vulnerabilities: we create detailed action plans that balance security, operational efficiency, and risk mitigation.",

    why3Title: "Measurable Results",
    why3Desc: "We deliver detailed analyses, technical reports, and actionable recommendations that can be implemented immediately. Our focus is to generate real impact on your company's security, helping reduce cyber risks, increase system resilience, and provide confidence to all stakeholders.",

    // Our Impact Section
    impactTitle: "Our Impact",
    impactSubtitle: "Real results that reflect our commitment to security.",
    impactVulns: "20+ vulnerabilities remediated",
    impactBreaches: "0 breaches post-engagement",
    impactContinents: "Clients across 3 continents",

    // About Page
    aboutTitle: "About Us",
    aboutSubtitle: "Get to know PontoCego Security",
    
    whoWeAreTitle: "Who We Are",
    whoWeAreText1: "PontoCego Security is a Brazilian cybersecurity company dedicated to helping organizations of all sizes build safer, more resilient digital environments. We specialize in protecting small and medium-sized businesses all over the world by providing high-quality, affordable, and remote cybersecurity services that remove the barriers of distance and complexity.",
    whoWeAreText2: "Founded by professionals passionate about eliminating the “blind spots” that leave businesses vulnerable, PontoCego Security was created to close the growing security gap between large corporations and smaller organizations. Our belief is simple: every company deserves enterprise-level protection, regardless of its size, budget, or location.",
    whoWeAreText3: "We deliver practical and data-driven solutions that combine advanced automation, manual expertise, and strategic insight. From penetration testing and vulnerability assessments to secure code review and consulting, our services are designed to help companies identify, understand, and eliminate risks before attackers can exploit them. Our team works according to industry-recognized frameworks — OWASP, MITRE ATT&CK, and NIST — to ensure consistency, precision, and global standards in everything we do. Together, they combine technical expertise, real-world experience, and a shared mission to make cybersecurity more accessible, transparent, and effective",
    
    missionTitle: "Our Mission",
    missionText: "Our mission is to provide world-class cybersecurity solutions that empower small and medium-sized businesses to protect their digital assets, minimize cyber risks, and operate confidently in a constantly evolving digital world.",
    missionText2: "We strive to democratize cybersecurity, making advanced protection and strategic guidance available to every business, not just those with large internal IT departments. Through continuous research, collaboration, and improvement, we help organizations strengthen their defenses, meet compliance requirements, and build lasting resilience against modern threats.",
    
    valuesTitle: "Our Values",
    value1Title: "Excellence",
    value1Desc: "We are driven by technical precision, dedication, and a commitment to results. Every engagement is handled with the same level of rigor and care, whether for a local startup or an international client. We continuously refine our methodologies to ensure accuracy, quality, and measurable improvement in our clients’ security posture.",
    value2Title: "Integrity",
    value2Desc: "Trust is at the heart of our work. We act with honesty, transparency, and accountability in every project, safeguarding not only systems but also relationships and reputations. We value open communication and ethical conduct as non-negotiable principles.",
    value3Title: "Innovation",
    value3Desc: "Cybersecurity never stands still, and neither do we. Our team continually researches emerging attack techniques, tools, and trends to stay ahead of the curve. We invest in ongoing education and professional development, pursuing and holding certifications such as CEH, eJPT, and HTB CPTS, ensuring our expertise remains at the forefront of modern cybersecurity.",
    
    btnMeetTeam: "Meet Our Team",
    
    // Team Page
    teamTitle: "Our Team",
    teamSubtitle: "Experts dedicated to your digital security",
    
    member1Name: "Andressa Mathias",
    member1Role: "Founder & Operations Manager",
    member1Bio: "With over 5 years of web development experience, she applies security practices and standards to deliver reliable solutions. At PontoCego, she manages operations and client relations, ensuring every project meets high standards of quality, efficiency, and security.",    
    member2Name: "Cezar Pedroso",
    member2Role: "Pentester & Security Researcher",
    member2Bio: "Cezar specializes in network and web application security, performing vulnerability assessments and penetration testing aligned with OWASP and NIST standards. He studies Software Engineering and IT at William Penn University, focusing on improving SMB security frameworks.",
    member3Name: "Daniel Saguar Gonzalez",
    member3Role: "Security Analyst & Consultant",
    member3Bio: "Daniel, a William Penn University IT graduate, works in vulnerability analysis, incident response, and cybersecurity consulting. He applies automation and established frameworks to strengthen system resilience and support clients in improving their security posture.",
    
    // Contact Page
    contactTitle: "Get In Touch",
    contactSubtitle: "We're ready to help protect your business",
    
    contactFormTitle: "Send a Message",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    btnSend: "Send Message",
    
    contactInfoTitle: "Contact Information",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    locationLabel: "Location",
    locationText: "Curitiba, Brazil",
    
    successMessage: "Message sent successfully! We'll be in touch soon.",
    
    // Privacy Policy
    privacyTitle: "Privacy Policy",
    privacyIntro: "At PontoCego Security, we take your privacy seriously.",
    privacySection1Title: "Information Collection",
    privacySection1Text: "We only collect information necessary to effectively provide our services.",
    privacySection1Bullet1: "Contact information (name, email, phone)",
    privacySection1Bullet2: "Company information",
    privacySection1Bullet3: "Technical data required for security assessments",
    privacySection2Title: "Use of Information",
    privacySection2Text: "Your information is used exclusively to improve our services and communication.",
    privacySection2Bullet1: "Provision of cybersecurity services",
    privacySection2Bullet2: "Communication about projects and proposals",
    privacySection2Bullet3: "Improvements to our services",
    privacySection2Bullet4: "Compliance with legal obligations",
    privacySection3Title: "Data Protection",
    privacySection3Text: "We use security best practices to protect your information.",
    privacySection3Bullet1: "Data encryption in transit and at rest",
    privacySection3Bullet2: "Strict access controls",
    privacySection3Bullet3: "Regular security audits",
    privacySection3Bullet4: "LGPD and GDPR compliance",
    privacySection4Title: "Data Sharing",
    privacySection4Text: "We do not sell, rent, or share your personal information with third parties, except when:",
    privacySection4Bullet1: "Necessary for contracted service delivery",
    privacySection4Bullet2: "Required by law or court order",
    privacySection4Bullet3: "With your explicit consent",
    privacySection5Title: "Your Rights",
    privacySection5Text: "You have the right to:",
    privacySection5Bullet1: "Access your personal data",
    privacySection5Bullet2: "Correct inaccurate information",
    privacySection5Bullet3: "Request deletion of your data",
    privacySection5Bullet4: "Revoke consent",
    privacySection5Bullet5: "Port your data to another provider",
    privacySection6Title: "Cookies and Similar Technologies",
    privacySection6Text: "We use essential cookies for site functionality and to improve your browsing experience. You can configure your browser to refuse cookies, but this may affect site functionality.",
    privacySection7Title: "Third-Party Services",
    privacySection7Text: "We use Formspree to manage contact form submissions. The information provided (such as name, email, and message) is processed by Formspree's servers and forwarded to our team via email. Formspree acts only as a technical intermediary and does not use your data for its own purposes. For more details, see Formspree's Privacy Policy.",
    privacySection8Title: "Contact",
    privacySection8Text: "For privacy questions or to exercise your rights, contact us:",
    privacySection8Email: "Email: pontocegosec@proton.me",
    privacySection9Title: "Policy Updates",
    privacySection9Text: "This policy may be updated periodically. We will notify you of significant changes through our website or by email.",
    privacyLastUpdate: "Last updated: October 25, 2025",
    
    // Client Companies Section
    clientCompaniesTitle: "Companies that trust PontoCego",
    clientCompaniesSubtitle: "Companies and organizations that trust PontoCego Security's cybersecurity services.",
    
    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Get answers about our cybersecurity services",
    faq1Question: "What happens after the test ends?",
    faq1Answer: "After the test is complete, we deliver a detailed report with all identified vulnerabilities, exploitation evidence, risk classification, and practical remediation recommendations. We also provide support for clarifying questions and, if needed, perform a follow-up test to validate implemented fixes.",
    faq2Question: "How does PontoCego ensure client data confidentiality?",
    faq2Answer: "Confidentiality is fundamental to our work. We sign non-disclosure agreements (NDAs) before any project, apply encryption to all collected data, and follow strict security protocols. All data is securely stored and deleted after project completion, as agreed with the client.",
    faq3Question: "Can testing be performed without interrupting my company's services?",
    faq3Answer: "Yes. We work with protocols that minimize operational impacts. Our tests are carefully planned and executed during agreed hours with strict controls to prevent interruptions. For critical environments, we can perform tests in staging environments or use non-intrusive techniques.",
    faq4Question: "Where does PontoCego operate?",
    faq4Answer: "We operate globally remotely, serving companies in various countries. Our headquarters is in Brazil, but we offer cybersecurity services to organizations worldwide without geographical limitations. Our clients are distributed across 3 continents.",
    faq5Question: "What is a pentest and why does my company need it?",
    faq5Answer: "Pentest (penetration test) is a security assessment where we simulate real attacks to identify vulnerabilities in systems, networks, and applications. It's essential because it allows you to discover and fix security flaws before malicious attackers exploit them, protecting sensitive data and company reputation.",
    faq6Question: "What's the average timeline for a pentest project?",
    faq6Answer: "The timeline varies according to project scope and complexity. On average, a web application pentest takes 1 to 2 weeks, while more comprehensive tests (including infrastructure and networks) can take 2 to 4 weeks. The final report is delivered within 5 business days after testing completion.",
    faq7Question: "Can I hire just a quick technical assessment?",
    faq7Answer: "Yes. We offer rapid vulnerability assessments and security diagnostics that can be completed in a few days. These services are ideal for companies seeking an initial view of their security posture or needing a specific analysis before investing in a full pentest.",
    
    // Blog Section
    navBlog: "Blog",
    blogTitle: "Blog",
    blogSubtitle: "Cybersecurity insights and knowledge",
    blogPost1Title: "Inside a Pentest: Steps, Methodology, and Best Practices",
    blogPost1Excerpt: "Understand how a professional penetration test works, from planning to the final report. Discover which methodologies are used, how vulnerabilities are exploited, and what really differentiates a technical pentest from a simple automated scan.",
    blogPost2Title: "How LGPD Affects Your Company's Security",
    blogPost2Excerpt: "Brazil's General Data Protection Law (LGPD) changed how companies handle sensitive information. Learn about the main security requirements, how to avoid penalties, and the role of vulnerability testing in compliance with the legislation.",
    blogPost3Title: "Rising Cyberattacks: The Most Common Threats in 2025",
    blogPost3Excerpt: "Cyberattacks are becoming more sophisticated and frequent. Learn about the main trends and attack vectors observed in 2025 — and what your organization can do now to strengthen defenses before becoming the next target.",
    btnReadMore: "Read More",
    blogPostAuthor: "PontoCego Security Team",
    blogPost1Date: "Published on October 10, 2025",
    blogPost2Date: "Published on October 15, 2025",
    blogPost3Date: "Published on October 20, 2025",
    btnBackToBlog: "Back to Blog",
    relatedPostsTitle: "Related Articles",
    
    // Blog Post 1 Content (English versions match Portuguese structure)
    blogPost1Section1Title: "What is a Pentest?",
    blogPost1Section1Text: "A penetration test, or pentest, is an authorized security assessment that simulates real attacks against systems, networks, or applications. Unlike automated scanners, a pentest combines sophisticated tools with human expertise to identify complex vulnerabilities that machines alone cannot detect. The goal is to discover security flaws before malicious attackers exploit them, protecting sensitive data, business reputation, and continuity.",
    blogPost1Section2Title: "Steps of a Professional Pentest",
    blogPost1Section2Text: "A well-structured penetration test follows a clear methodology, generally aligned with recognized frameworks like OWASP, PTES (Penetration Testing Execution Standard), and NIST. The main steps include:",
    blogPost1Bullet1: "Planning and Scope Definition: Defining systems to be tested, objectives, timeline, and rules of engagement.",
    blogPost1Bullet2: "Reconnaissance: Gathering information about the target, including infrastructure, technologies used, and possible attack vectors.",
    blogPost1Bullet3: "Vulnerability Analysis: Identifying weaknesses using automated scanners and detailed manual analysis.",
    blogPost1Bullet4: "Exploitation: Controlled attempt to exploit found vulnerabilities to assess real impact.",
    blogPost1Bullet5: "Post-Exploitation: Assessing compromise extent, including access to sensitive data and lateral movement.",
    blogPost1Bullet6: "Report and Recommendations: Detailed documentation of all findings, exploitation evidence, and practical remediation guidance.",
    blogPost1Section3Title: "Methodologies and Frameworks",
    blogPost1Section3Text: "Pentest professionals follow established methodologies to ensure consistency, complete coverage, and reliable results. Among the most used frameworks are the OWASP Testing Guide for web applications, MITRE ATT&CK for attack techniques in corporate environments, and PTES for complete test process structuring. These methodologies guide each step from planning to final report delivery.",
    blogPost1Section4Title: "Pentest vs. Automated Scanning",
    blogPost1Section4Text: "Automated tools are useful for quickly identifying known vulnerabilities, but they have significant limitations. They generate many false positives, don't understand business context, and can't exploit chained vulnerabilities that require logical reasoning. A professional pentest complements automation with deep manual analysis, real vulnerability exploitation, and business impact assessment, offering insights far beyond a simple list of technical flaws.",
    blogPost1Section5Title: "Conclusion",
    blogPost1Section5Text: "Investing in a professional pentest is fundamental for companies that take security seriously. By simulating real attacks and identifying vulnerabilities before they're exploited, organizations can protect proactively, reduce risks, and ensure client confidence. If you want to protect your company with high-quality penetration testing, contact PontoCego Security.",
    
    // Blog Post 2 Content
    blogPost2Section1Title: "What is LGPD?",
    blogPost2Section1Text: "The General Data Protection Law (Law No. 13.709/2018) is Brazilian legislation that regulates personal data processing by public and private organizations. Inspired by Europe's GDPR, LGPD establishes strict guidelines on collection, storage, processing, and sharing of personal data, ensuring transparency, security, and respect for data subjects' privacy. Companies that don't comply with LGPD are subject to penalties including fines of up to 2% of annual revenue (limited to R$ 50 million per violation), plus administrative sanctions and reputation damage.",
    blogPost2Section2Title: "Main LGPD Security Requirements",
    blogPost2Section2Text: "LGPD requires companies to adopt technical and administrative measures to protect personal data against unauthorized access, leaks, and security incidents. Although the law doesn't specify exact technologies, it establishes clear principles including:",
    blogPost2Bullet1: "Security: Use of appropriate technical controls to protect data against unauthorized or unlawful processing.",
    blogPost2Bullet2: "Prevention: Adoption of measures to prevent harm to data subjects, including impact assessments and risk management.",
    blogPost2Bullet3: "Accountability and Transparency: Demonstration of compliance and adoption of good data governance practices.",
    blogPost2Bullet4: "Transparency: Ensuring data subjects have clear access to information about how their data is processed.",
    blogPost2Bullet5: "Incident Response: Ability to detect, communicate, and mitigate security incidents in a timely manner.",
    blogPost2Section3Title: "How to Avoid Penalties",
    blogPost2Section3Text: "To avoid fines and sanctions, companies must implement a structured compliance program including data mapping, risk assessment, clear privacy policies, and employee training. It's essential to appoint a Data Protection Officer (DPO), establish incident response processes, and conduct regular security audits. LGPD values the adoption of good practices and the ability to demonstrate continuous compliance, not just one-time compliance.",
    blogPost2Section4Title: "The Role of Vulnerability Testing in Compliance",
    blogPost2Section4Text: "Penetration tests and vulnerability assessments are essential tools to ensure technical security measures are effectively protecting personal data. A pentest identifies flaws that could allow unauthorized access to sensitive information, while vulnerability assessments map weaknesses in systems, networks, and applications. These services help companies meet LGPD security requirements, demonstrate accountability, and reduce risks of incidents that could result in penalties or reputation damage.",
    blogPost2Section5Title: "Conclusion",
    blogPost2Section5Text: "LGPD compliance isn't just a legal obligation, but also an opportunity to strengthen client and partner trust. Investing in cybersecurity, including vulnerability tests and pentests, is a fundamental step to ensure your company is protected and compliant with legislation. Contact PontoCego Security to learn how we can help your organization meet LGPD requirements.",
    
    // Blog Post 3 Content
    blogPost3Section1Title: "The Threat Landscape in 2025",
    blogPost3Section1Text: "2025 has been marked by a significant increase in cyberattack sophistication and frequency. Ransomware groups are exploiting supply chains, state-sponsored attackers are targeting critical infrastructure, and common cybercriminals are using artificial intelligence to automate and enhance their campaigns. Small and medium-sized businesses remain preferred targets, often due to inadequate defenses and lack of risk awareness.",
    blogPost3Section2Title: "Main Attack Vectors",
    blogPost3Section2Text: "In 2025, we observe the predominance of the following attack vectors:",
    blogPost3Bullet1: "Ransomware as a Service (RaaS): Platforms that allow even inexperienced criminals to launch sophisticated ransomware campaigns, drastically increasing attack volume.",
    blogPost3Bullet2: "Advanced AI-Powered Phishing: Messages generated by artificial intelligence that perfectly mimic corporate language, making social engineering attacks much more convincing.",
    blogPost3Bullet3: "Zero-Day Vulnerability Exploitation: Attackers exploit uncorrected flaws in popular software, gaining access before companies can apply patches.",
    blogPost3Bullet4: "Supply Chain Attacks: Compromising suppliers or partners to reach larger organizations, as seen in recent high-impact incidents.",
    blogPost3Bullet5: "Credential Compromise: Using stolen or leaked credentials to access corporate systems, often without triggering security alerts.",
    blogPost3Section3Title: "Impacts and Consequences",
    blogPost3Section3Text: "The impacts of successful attacks go far beyond immediate financial losses. Companies face prolonged operational disruptions, loss of client trust, reputation damage, regulatory costs, and in some cases, permanent business closure. The average downtime after a ransomware attack is 21 days, and the average recovery cost exceeds hundreds of thousands of dollars.",
    blogPost3Section4Title: "How to Strengthen Defense",
    blogPost3Section4Text: "To protect against modern threats, organizations must adopt a layered approach that combines technology, processes, and people:",
    blogPost3Defense1: "Regular Vulnerability Assessments: Identify and fix weaknesses before attackers exploit them.",
    blogPost3Defense2: "Penetration Testing: Simulate real attacks to assess defense effectiveness and identify blind spots.",
    blogPost3Defense3: "Awareness Training: Educate employees about phishing, social engineering, and security best practices.",
    blogPost3Defense4: "Network Segmentation: Limit lateral movement of attackers within infrastructure.",
    blogPost3Defense5: "Multi-Factor Authentication (MFA): Add extra protection layers against credential compromise.",
    blogPost3Defense6: "Incident Response Plan: Ensure the organization knows how to react quickly in case of attack.",
    blogPost3Section5Title: "Conclusion",
    blogPost3Section5Text: "The cyberthreat landscape in 2025 is more challenging than ever, but proactive companies can protect themselves effectively. Investing in security assessments, penetration testing, and employee awareness is fundamental to building resilience against modern attacks. Contact PontoCego Security to learn how we can help your organization protect against 2025's threats.",
    
    // Careers Page
    careers: "Careers",
    careersTitle: "Careers",
    careersSubtitle: "Join our team",
    careersPara1: "At PontoCego Security, we believe security is more than technology — it's purpose.",
    careersPara2: "We're looking for professionals and students passionate about cybersecurity who want to grow with us.",
    careersPara3: "Currently, we have volunteer opportunities focused on research, development, and technical support.",
    careersPara4: "Send your resume to carreiras@pontocegosecurity.com",
    
    // Terms of Service
    termsOfService: "Terms of Service",
    termsTitle: "Terms of Service",
    termsSubtitle: "Last updated: November 01, 2025",
    termsSection1Title: "1. Use of the Site",
    termsSection1Text: "By accessing and using the PontoCego Security website, you agree to comply with these Terms of Service and all applicable laws. Use of this site is for informational and legitimate business purposes only. You may not use this site in a way that could damage, disable, or impair its operation, or in any way that interferes with third-party use.",
    termsSection2Title: "2. Services",
    termsSection2Text: "PontoCego Security offers cybersecurity services, including penetration testing, vulnerability assessments, and technical consulting. All services are provided through specific contracts that define scope, timeline, deliverables, and responsibilities of both parties. Service provision is conditional upon signing a Non-Disclosure Agreement (NDA) and Testing Authorization Term, when applicable.",
    termsSection3Title: "3. Intellectual Property",
    termsSection3Text: "All content on this site, including texts, graphics, logos, icons, images, and software, is property of PontoCego Security or its licensors and is protected by intellectual property laws. Technical reports and documents delivered to clients are the exclusive property of the contractor, but the methodology, tools, and processes used remain intellectual property of PontoCego Security.",
    termsSection4Title: "4. Limitation of Liability",
    termsSection4Text: "PontoCego Security is not responsible for indirect, incidental, special, or consequential damages arising from use or inability to use this site. Regarding contracted services, our liability is limited to the amount paid by the client for the specific project. All security tests are conducted with professional care and under strict security protocols, but we don't guarantee such tests won't cause temporary disruptions in production environments, although we take all reasonable precautions to avoid impacts.",
    termsSection5Title: "5. Privacy",
    termsSection5Text: "Use of information collected through this site is subject to our Privacy Policy. All client data obtained during service provision is treated with strict confidentiality, according to non-disclosure agreements and in compliance with LGPD (General Data Protection Law).",
    termsSection6Title: "6. Contact",
    termsSection6Text: "For questions related to these Terms of Service, contact us:",
    privacyPolicyLink: "Privacy Policy",
    
    // impactNote added
    impactNote: "Our clients trust PontoCego Security for consistent results, practical recommendations, and a real commitment to security.",
    
    // Industries We Secure Section
    industriesTitle: "Industries We Secure",
    industriesSubtitle: "Protecting companies in critical sectors with tailored cybersecurity solutions",
    industry1: "Tech Startups",
    industry1Desc: "Protecting innovation and intellectual property",
    industry2: "Fintech",
    industry2Desc: "Ensuring financial security and compliance",
    industry3: "E-Commerce",
    industry3Desc: "Protecting customer data and transactions",
    industry4: "SaaS",
    industry4Desc: "Scalable security for cloud applications",
    industry5: "Development Agencies",
    industry5Desc: "Security consulting for development teams",
    
    // CTA Banner
    ctaBannerTitle: "Let's discuss your environment and build a tailored testing plan",
    ctaBannerText: "Our team is ready to assess your infrastructure and develop a custom security strategy",
    ctaBannerButton: "Get a Quote",
    
    // Footer
    footerAbout: "About PontoCego",
    footerAboutText: "Cybersecurity experts dedicated to protecting your business from digital threats.",
    footerQuickLinks: "Quick Links",
    footerFollowUs: "Follow Us",
    footerCopyright: "© 2025 PontoCego Security. All rights reserved.",
    privacyPolicy: "Privacy Policy"
  }
};

let currentLang = 'pt';

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('preferredLanguage', currentLang);
  updateContent();
  updateLanguageToggle();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  updateContent();
  updateLanguageToggle();
}

function updateContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  });
}

function updateLanguageToggle() {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'pt' ? 'EN' : 'PT';
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
  setLanguage(savedLang);
  
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
}

document.addEventListener('DOMContentLoaded', initLanguage);
