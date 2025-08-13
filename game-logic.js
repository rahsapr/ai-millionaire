/* -------------------- GAME DATA -------------------- */
const PRIZES = [
  {tier:13,label:"$1,000,000"}, {tier:12,label:"$125,000"}, {tier:11,label:"$64,000"},
  {tier:10,label:"$32,000",guaranteed:true}, {tier:9,label:"$16,000"}, {tier:8,label:"$8,000"},
  {tier:7,label:"$4,000"}, {tier:6,label:"$2,000"}, {tier:5,label:"$1,000",guaranteed:true},
  {tier:4,label:"$500"}, {tier:3,label:"$300"}, {tier:2,label:"$200"}, {tier:1,label:"$100"}
];

const AMAZON_QUESTIONS = [
    {q:"Amazon's own family of foundation models, available in Bedrock, is named what?", choices:["Olympus","Aurora","Titan","Meridian"], a:2, difficulty:1},
    {q:"Which AWS service is an AI-powered coding companion, similar to GitHub Copilot?", choices:["CodeCatalyst","Cloud9","CodeWhisperer","CodeDeploy"], a:2, difficulty:1},
    {q:"What is Amazon's conversational AI assistant for businesses, designed to be an 'expert on your business'?", choices:["Alexa for Business","Amazon Expert","Amazon Q","AWS Concierge"], a:2, difficulty:1},
    {q:"What is Amazon Bedrock's primary function?", choices:["A data streaming service","A serverless database","A service to build with foundation models","A cloud-based IDE"], a:2, difficulty:1},
    {q:"AWS's custom-designed chip optimized for cost-effective AI model *inference* is called:", choices:["Trainium","Graviton","Inferentia","QuantumLeap"], a:2, difficulty:2},
    {q:"AWS's custom-designed chip for high-performance AI model *training* is called:", choices:["Trainium","Graviton","Anapurna","Inferentia"], a:0, difficulty:2},
    {q:"In 2023-2024, Amazon made a multi-billion dollar investment in which major AI startup, making their models available on Bedrock?", choices:["OpenAI","Cohere","Mistral AI","Anthropic"], a:3, difficulty:2},
    {q:"Within Amazon Bedrock, what feature allows you to orchestrate tasks by giving the model access to tools and APIs?", choices:["Knowledge Bases","Provisioned Throughput","Agents","Guardrails"], a:2, difficulty:3},
    {q:"What AWS service is a fully managed platform to build, train, and deploy machine learning models at scale?", choices:["Amazon Rekognition","AWS Lambda","Amazon SageMaker","Amazon Polly"], a:2, difficulty:1},
    {q:"What is the primary purpose of 'Knowledge Bases for Amazon Bedrock'?", choices:["To store user conversations","To fine-tune a model's weights","To implement Retrieval-Augmented Generation (RAG)","To cache model responses"], a:2, difficulty:2},
    {q:"Amazon's Titan Image Generator model includes what built-in responsible AI feature by default?", choices:["Invisible watermarks","Bias detection","Content filtering","Redaction of faces"], a:0, difficulty:3},
    {q:"Amazon often describes its generative AI strategy in 'three layers'. What do these layers represent?", choices:["Small, Medium, Large models","Text, Image, Audio models","Infrastructure, Tools/FMs, Applications","Internal, Partner, Open-Source models"], a:2, difficulty:3},
    {q:"The Claude 3 family of models (Haiku, Sonnet, Opus) from Anthropic are prominently featured on which AWS service?", choices:["AWS AI Platform","Amazon Bedrock","Amazon SageMaker","EC2 P5 Instances"], a:1, difficulty:2},
    {q:"Which AWS service uses AI to automatically extract text and data from scanned documents?", choices:["Amazon S3 Select","Amazon Textract","AWS Comprehend","AWS Glue"], a:1, difficulty:1},
    {q:"If you wanted to turn text into lifelike speech using an AI service on AWS, which would you use?", choices:["Amazon Speechify","Amazon Lex","Amazon Polly","Amazon Transcribe"], a:2, difficulty:1},
    {q:"What feature in SageMaker provides access to a broad selection of pre-trained models, including many open-source foundation models?", choices:["SageMaker JumpStart","SageMaker Pipelines","SageMaker Studio","SageMaker Canvas"], a:0, difficulty:2},
    {q:"When using Amazon Q, what allows it to connect to your company's specific data sources like S3, Slack, or Salesforce?", choices:["IAM Roles","VPC Endpoints","Connectors","DataSync"], a:2, difficulty:2},
    {q:"AWS's AI-powered service for identifying objects, people, text, and activities in images and videos is called:", choices:["Amazon Lookout","Amazon Rekognition","AWS Panorama","Amazon Inspector"], a:1, difficulty:1}
];

let QUESTION_BANK = [
// --- NEW, HIGH-QUALITY QUESTIONS ---
{q:"What is the key difference between AWS Trainium and Inferentia chips?", choices:["Trainium is high-cost; Inferentia is low-cost.","Trainium is for text; Inferentia is for images.","Trainium is for model training; Inferentia is for inference.","Trainium uses ARM; Inferentia uses x86 architecture."], a:2, difficulty:2},
{q:"In a Mixture-of-Experts (MoE) model, what does the 'gating network' do?", choices:["Loads all model parameters into memory.","Routes each input token to the best expert.","Applies the final activation function to the output.","Aggregates the final outputs from all experts."], a:1, difficulty:3},
{q:"What's the main trade-off between a long context window and RAG?", choices:["RAG has fresh data; long context reasons over provided text.","Long context is open-source; RAG is proprietary.","RAG is for creativity; long context for facts.","Long context is more secure; RAG is vulnerable."], a:0, difficulty:2},
{q:"What is the primary advantage of State Space Models (SSMs) like Mamba?", choices:["They are inherently multimodal from the start.","They avoid quadratic complexity, scaling linearly.","They use fewer parameters for easier fine-tuning.","They require much less training data."], a:1, difficulty:3},
{q:"What do 'Action Groups' do in an Amazon Bedrock Agent?", choices:["Filter for harmful or inappropriate content.","Manage the agent's conversation history.","Group related APIs and functions the agent can use.","Define the agent's personality and tone."], a:2, difficulty:2},
{q:"What is the main reason for using synthetic data in AI training?", choices:["To create large, diverse, and privacy-safe datasets.","To ensure the model only trains on text.","To completely eliminate the need for data labeling.","It downloads faster than real-world data."], a:0, difficulty:2},
{q:"What is the goal of post-training quantization for LLMs on edge devices?", choices:["To teach the model a new skill post-training.","To add a layer of encryption to the model.","To reduce model size and speed up inference.","To increase the model's factual accuracy."], a:2, difficulty:2},
{q:"The ReAct framework for AI agents combines what two capabilities?", choices:["Reasoning (thought) and taking actions (tools).","Creativity and factual recall.","Language understanding and generation.","User input and output formatting."], a:0, difficulty:2},
{q:"What problem do multi-agent frameworks like AutoGen solve?", choices:["Enabling specialized agents to collaborate on complex problems.","Reducing the computational cost of a single agent.","Creating a universal communication protocol for all AIs.","Allowing AI agents to run completely offline."], a:0, difficulty:3},
{q:"Why use 'Provisioned Throughput' for a model in Amazon Bedrock?", choices:["To get a lower, variable price per token.","To guarantee consistent performance and throughput.","To get early access to experimental models.","To allow the model to be fine-tuned."], a:1, difficulty:2},
{q:"What is the core principle of Constitutional AI?", choices:["The model critiques its own responses based on principles.","The model is trained only with direct human feedback.","The model's training data is heavily filtered.","The model has hard-coded rules against specific topics."], a:0, difficulty:3},
{q:"Why is the 'Needle in a Haystack' test important for LLMs?", choices:["It tests the model's creative writing ability.","It assesses recall of a fact in a long document.","It measures the model's raw processing speed.","It evaluates the model's resistance to attacks."], a:1, difficulty:2},
{q:"What is a key focus for Amazon Q in enterprise settings?", choices:["Generating marketing and social media copy.","Creating realistic 3D models and environments.","Automating multi-step business workflows.","Composing original musical scores."], a:2, difficulty:2},
{q:"What is the main purpose of digital watermarking in AI-generated images?", choices:["To embed copyright information to prevent theft.","To make AI-generated content identifiable as synthetic.","To increase the visual quality of the image.","To reduce the image's file size."], a:1, difficulty:2},
{q:"What is the main goal of speculative decoding for LLM inference?", choices:["Predicting the user's next question in advance.","Running multiple models and having them vote.","Using a 'draft' model to accelerate a larger one.","Caching common user queries for instant answers."], a:2, difficulty:3},
{q:"What is a key step towards reliable 'tool use' in AI agents?", choices:["The ability to browse the entire internet.","The ability to run on low-power mobile devices.","The ability to correctly understand and use APIs.","The ability to generate human-like conversation."], a:2, difficulty:2},
{q:"What distinguishes 'Graph RAG' from traditional vector-based RAG?", choices:["Graph RAG only works with image data.","Graph RAG does not require a vector database.","Graph RAG uses relationships in a knowledge graph.","Graph RAG is much faster but less accurate."], a:2, difficulty:3},
{q:"What is the main purpose of 'Guardrails for Amazon Bedrock'?", choices:["To automatically translate the model's output.","To protect the model from denial-of-service attacks.","To define and enforce safety and topic policies.","To route requests to the cheapest available model."], a:2, difficulty:2},
{q:"What is the primary advantage of using a Small Language Model (SLM)?", choices:["They do not require any training data.","Lower cost, faster performance, and high accuracy on niche tasks.","They are inherently more secure than large models.","They are more creative than large models."], a:1, difficulty:2},
{q:"Combining Bedrock Agents with AWS Step Functions helps with what?", choices:["Automatically fine-tuning the foundation model.","Orchestrating complex, long-running, and stateful tasks.","Visualizing the agent's internal thought process.","Providing a serverless environment for code execution."], a:1, difficulty:3},
{q:"What is the main technical challenge for true multimodal AI?", choices:["The slow speed of internet connections.","Finding a common representation space for all modalities.","The high cost of GPUs for processing video.","The lack of sufficient video and audio data."], a:1, difficulty:3},
{q:"What is the primary goal of Context Engineering in GenAI?", choices:["To improve the speed of AI model training.","To strategically populate an AI model's context window with relevant information.","To develop new AI model architectures.","To reduce the computational cost of AI models."], a:1, difficulty:2},
{q:"Which of the following is a key benefit of effective Context Engineering?", choices:["Optimized AI agent performance.","Increased irrelevant data processing.","Decreased model accuracy.","Reduced need for data pre-processing."], a:0, difficulty:2},
{q:"Context Engineering is described as the discipline of designing and managing what?", choices:["User interfaces for AI applications.","Hardware infrastructure for AI.","AI model parameters.","Structures, signals, and affordances that modulate cognition and behavior."], a:3, difficulty:3},
{q:"In the context of AI agents, what does Context Engineering aim to prevent?", choices:["Overfitting of models.","Underutilization of computational resources.","Flooding agents with irrelevant data.","Lack of diverse training data."], a:2, difficulty:2},
{q:"What is the primary purpose of the Model Context Protocol (MCP)?", choices:["To create new AI programming languages.","To standardize how applications provide context to large language models (LLMs).","To develop advanced AI hardware.","To manage AI model training datasets."], a:1, difficulty:2},
{q:"MCP is often compared to what common technology for its role in enabling seamless integration?", choices:["Wi-Fi router.","USB-C port.","Ethernet cable.","Bluetooth connection."], a:1, difficulty:3},
{q:"How does MCP facilitate real-time data connection for LLMs?", choices:["By requiring manual data input from users.","By using a proprietary data format.","By storing all data within the LLM itself.","By connecting LLMs directly to enterprise data sources."], a:3, difficulty:2},
{q:"What is a key benefit of MCP in terms of AI interactions?", choices:["It simplifies the process of AI model deployment.","It ensures secure and reliable interactions between AI models and data.","It reduces the need for internet connectivity for AI.","It limits the types of data AI can access."], a:1, difficulty:2},
{q:"Which of the following best describes MCP in the context of AI agents?", choices:["A standardized way for AI agents to plug into tools, data, and services.","A method for training AI agents.","A framework for evaluating AI agent performance.","A protocol for inter-agent communication."], a:0, difficulty:3},
{q:"Research on GenAI usage patterns identifies which two distinct types?", choices:["Developer and End-user.","Analyst and Strategist.","Intellectual partner and information browser.","Creator and Consumer."], a:2, difficulty:2},
{q:"What factor significantly impacts GenAI adoption, according to research?", choices:["Model size.","Need for uniqueness.","Hardware specifications.","Programming language used."], a:1, difficulty:2},
{q:"What role does trust play in GenAI adoption?", choices:["It is a primary barrier.","It is only relevant for developers.","It has no impact.","It is a mediating factor."], a:3, difficulty:2},
{q:"What do consumer mindsets about GenAI emphasize for driving value?", choices:["Complex features.","Minimal user interaction.","Transparency and consistent service.","High performance."], a:2, difficulty:1},
{q:"Which prompting technique involves providing no examples to the model?", choices:["Few-shot prompting.","Chain of Thought prompting.","Zero-shot prompting.","Meta prompting."], a:2, difficulty:1},
{q:"What does Chain of Thought (CoT) prompting encourage the model to do?", choices:["Focus only on factual information.","Ignore previous turns in conversation.","Generate shorter responses.","Explain its reasoning step-by-step."], a:3, difficulty:1},
{q:"What is the purpose of Meta Prompting?", choices:["To generate random outputs.","To limit the model's creativity.","To guide the model in generating other prompts.","To simplify model architecture."], a:2, difficulty:3},
{q:"What best practice involves assigning a specific persona to the AI?", choices:["Iterative refinement.","Self-correction.","Role assignment.","Specificity."], a:2, difficulty:1},
{q:"What is the goal of iterative refinement in prompt engineering?", choices:["To continuously test and refine prompts.","To increase model training time.","To reduce the number of prompts needed.","To automate prompt generation."], a:0, difficulty:1},
{q:"Why is GenAI evaluation essential?", choices:["To simplify deployment.","To measure performance and reliability.","To reduce development costs.","To increase model size."], a:1, difficulty:1},
{q:"Which evaluation method involves human evaluators comparing model outputs?", choices:["Automated metrics.","Task-specific evaluation.","Benchmarking.","Pairwise comparison."], a:3, difficulty:2},
{q:"What do automated metrics like ROUGE and BLEU assess?", choices:["User interface design.","Hardware utilization.","Fluency, coherence, and relevance.","Model training speed."], a:2, difficulty:3},
{q:"What is the purpose of benchmarking in GenAI evaluation?", choices:["To optimize model parameters.","To identify security vulnerabilities.","To compare models against each other.","To generate new datasets."], a:2, difficulty:1},
{q:"What does business impact assessment evaluate?", choices:["Real-world impact on business metrics.","Ethical implications of AI.","Technical complexity of the model.","Number of users adopting the AI."], a:0, difficulty:2},
{q:"What does GenAI governance aim to establish?", choices:["Faster data processing techniques.","New programming languages.","Automated content generation.","Responsible and ethical deployment frameworks."], a:3, difficulty:2},
{q:"What do security evaluations assess in GenAI?", choices:["Training data size.","Model accuracy.","User satisfaction.","Vulnerabilities to prompt injection."], a:3, difficulty:2},
{q:"Which of the following is a key aspect of GenAI evaluation?", choices:["Reducing computational resources.","Automating model deployment.","Assessing factual accuracy.","Increasing model complexity."], a:2, difficulty:1},
{q:"What is a common challenge in GenAI evaluation?", choices:["Insufficient training data.","Lack of computing power.","Subjectivity in human judgment.","Slow model inference."], a:2, difficulty:2},
{q:"What is the ultimate goal of GenAI evaluation?", choices:["To eliminate human intervention.","To achieve perfect model performance.","To create self-improving AI.","To ensure trustworthy and effective AI systems."], a:3, difficulty:1},
{q:"What does 'LLM' commonly stand for in AI?", choices:["Large Language Model","Linear Learning Matrix","Local Latent Model","Low-Level ML"], a:0, difficulty:1},
{q:"What is 'prompt engineering' primarily concerned with?", choices:["Building GPUs","Designing training hardware","Improving RLHF algorithms","Tuning prompts to get better outputs"], a:3, difficulty:1},
{q:"Which core architecture is used by many modern language models like GPT?", choices:["Convolutional Networks","Recurrent Neural Networks","Transformers","Decision Trees"], a:2, difficulty:1},
{q:"What is a 'hallucination' in LLM output?", choices:["An incorrect but plausible-sounding answer","A model training phase","A visualization tool","A dataset type"], a:0, difficulty:1},
{q:"'RLHF' stands for which training technique?", choices:["Reinforcement Learning from Human Feedback","Randomized Linear Heuristic Fit","Recurrent Latent Human Function","Rapid Learning Hybrid Framework"], a:0, difficulty:1},
{q:"What does 'tokens' refer to in LLMs?", choices:["GPU memory blocks","Neural network weights","Units of text the model processes","Encryption keys"], a:2, difficulty:1},
{q:"What is 'fine-tuning' in LLMs?", choices:["Adjusting hyperparameters only","Training a model further on specific data","Converting model to binary","Compressing weights"], a:1, difficulty:1},
{q:"What is a 'checkpoint' in model development?", choices:["A saved model state","A dataset split method","A cloud provider","A type of GPU"], a:0, difficulty:1},
{q:"'AGI' stands for which term?", choices:["Autonomous Grid Interface","Augmented Generative Innovation","Applied Gradient Integration","Artificial General Intelligence"], a:3, difficulty:1},
{q:"Which paper introduced the Transformer architecture?", choices:["Playing Atari with Deep Reinforcement Learning","Generative Adversarial Networks","ImageNet: A large-scale hierarchical image database","Attention Is All You Need"], a:3, difficulty:2},
{q:"What core mechanism enables Transformers to weigh importance between tokens?", choices:["Self-attention","Convolution","Backpropagation","Dropout"], a:0, difficulty:2},
{q:"What is RLHF primarily used to achieve in LLMs?", choices:["Compress model weights","Align model outputs with human preferences","Scale model size","Speed up inference times"], a:1, difficulty:2},
{q:"What is 'inference' in the context of LLMs?", choices:["The model producing outputs for inputs","Data collection practice","Training with labeled data","Model sharding technique"], a:0, difficulty:2},
{q:"What is the primary benefit of model parallelism?", choices:["Improves model's reasoning","Allows training very large models across devices","Prevents hallucinations","Improves interpretability"], a:1, difficulty:2},
{q:"What is 'temperature' in language model sampling?", choices:["GPU thermal limit","A training hyperparameter for learning rate","A sampling parameter that affects randomness","Size of the model's context window"], a:2, difficulty:2},
{q:"What does 'few-shot' prompting mean?", choices:["Giving the model a few small hints after the answer","Providing a few examples in the prompt","Training on a few GPUs","Limiting outputs to a few tokens"], a:1, difficulty:2},
{q:"What is a 'decoder-only' Transformer like GPT primarily designed for?", choices:["Text generation","Image segmentation","Speech recognition","Feature extraction"], a:0, difficulty:2},
{q:"Which technique helps reduce hallucinations by grounding models in tools or retrieval?", choices:["Gradient clipping","Retrieval-Augmented Generation (RAG)","Weight decay","Dropout"], a:1, difficulty:2},
{q:"What does 'tokenization' do?", choices:["Converts GPU tensors to CPU","Removes stopwords automatically","Encrypts data before training","Transforms text into discrete tokens"], a:3, difficulty:2},
{q:"What is 'parameter count' generally used to describe for LLMs?", choices:["Number of GPUs used","Inference latency","Size of model weights","Number of training steps"], a:2, difficulty:2},
{q:"What is 'alignment' in AI safety terms?", choices:["Aligning datasets' formats","Ensuring models behave according to human values/preferences","Tuning hardware to model scale","Converting models to edge devices"], a:1, difficulty:2},
{q:"Which core idea helps attention scale on long sequences?", choices:["Full attention scales better","Convolution","Sparse attention can improve efficiency","Neither"], a:2, difficulty:3},
{q:"What is 'distillation' in model compression?", choices:["Training a smaller model to mimic a larger one","A data collection process","A special GPU cooling method","A visualization technique"], a:0, difficulty:2},
{q:"What does 'context window' refer to for an LLM?", choices:["Number of GPUs available","Learning rate schedule","Amount of text (tokens) model can attend to","Batch size"], a:2, difficulty:2},
{q:"What drawback can larger LLMs have if unmitigated?", choices:["Slower training convergence","More likelihood to hallucinate if unaligned","They no longer generalize","They cease being probabilistic"], a:1, difficulty:2},
{q:"What does 'safety fine-tuning' typically involve?", choices:["Adding adversarial GPUs","Training on curated data + human feedback","Removing attention layers","Converting models to CPU"], a:1, difficulty:2},
{q:"Which is an example of a multimodal AI system?", choices:["A model handling text+images (e.g., GPT-4 multimodal)","RNN","SVM","Linear regression"], a:0, difficulty:2},
{q:"What is 'zero-shot' capability?", choices:["Solve tasks without examples","Train without data","Zero inference cost","Run with zero latency"], a:0, difficulty:2},
{q:"What is 'instruction tuning' focused on?", choices:["Optimizing GPU ISA","Fine-tuning models with instruction examples","Hardware calibration","Data sanitation"], a:1, difficulty:2},
{q:"What does 'hallucination rate' measure?", choices:["Refusal percentage","Frequency of incorrect plausible outputs","Training loss","Parameter sparsity"], a:1, difficulty:2},
{q:"Which field studies interpretability?", choices:["Explainable AI (XAI)","GANs","RL","Cloud orchestration"], a:0, difficulty:2},
{q:"What is 'prompt injection'?", choices:["Optimizing prompts for speed","A vulnerability that manipulates model behavior","Data augmentation","Activation function"], a:1, difficulty:2},
{q:"Which architecture is used for encoder-decoder tasks?", choices:["Encoder-only","Decoder-only","Encoder-decoder (T5)","Convolution-only"], a:2, difficulty:2},
{q:"What is 'alignment tax'?", choices:["Literal tax","Trade-offs between capability & alignment","Taxes on data centers","GPU tariffs"], a:1, difficulty:3},
{q:"How to keep LLMs up-to-date without retraining?", choices:["Change vocabulary","Use retrieval / tools","Increase params","Lower temperature"], a:1, difficulty:3},
{q:"'Mixture of Experts' aims to:", choices:["Route inputs to subsets of parameters to scale efficiently","Blend human experts","Cause hallucinations","Compress datasets"], a:0, difficulty:3},
{q:"Which concept produces intermediate reasoning steps?", choices:["Chain-of-thought prompting","Temperature annealing","Dropout scheduling","Weight decay"], a:0, difficulty:3},
{q:"Agentic AI risk include:", choices:["Unintended autonomous actions","Lower inference cost","Better tokenization","Faster fine-tuning"], a:0, difficulty:3},
{q:"What is 'safety alignment' testing about?", choices:["Energy efficiency","Ensuring constraints & avoid harm","GPU utilization","Licensing"], a:1, difficulty:3},
{q:"Why quantize an LLM?", choices:["Increase precision","Reduce model size for inference","Increase hallucinations","Add tokens"], a:1, difficulty:3},
{q:"What is 'catastrophic forgetting'?", choices:["Losing earlier knowledge when learning new tasks","GPU failure","Dataset metric","Overfitting sign"], a:0, difficulty:3},
{q:"Which safety approach uses model self-critique?", choices:["Self-critique / auditing","Dropout","Backprop","Tokenization"], a:0, difficulty:3},
{q:"What does context length trade off against?", choices:["GPU vendor","Memory & compute cost","Accuracy always up","Number of layers"], a:1, difficulty:3},
{q:"How reduce bias in model outputs?", choices:["Data curation & human feedback","Increase temperature","Use smaller models only","Remove tokenizer"], a:0, difficulty:3},
{q:"What is 'red teaming' in AI?", choices:["Adversarial evaluation to find failure modes","Server hacking","GPU cluster","Compression technique"], a:0, difficulty:3},
{q:"Tool use example by language models?", choices:["Calling a search API to fetch facts","Change own weights","Alter hardware","Decrease context"], a:0, difficulty:3},
{q:"Which area makes LLM outputs explainable?", choices:["Explainable AI (XAI)","GANs","Reinforcement Learning","Cloud orchestration"], a:0, difficulty:3},
{q:"Which bottleneck limits huge LLM training throughput?", choices:["Network & interconnect bandwidth","Model architecture","Tokenization speed","Font rendering"], a:0, difficulty:3},
{q:"What is 'sparse attention' useful for?", choices:["Reduce compute for long contexts","Increase hallucinations","Slow inference","Simulate GPUs"], a:0, difficulty:3},
{q:"What is 'overfitting'?", choices:["Good on training, poor on unseen","Too many GPUs","Hardware failure","Data augmentation"], a:0, difficulty:2},
{q:"How to update LLM factuality without retraining?", choices:["Retrieval/tools/adapters","More params","Raise temperature","Smaller batch"], a:0, difficulty:3},
{q:"Which improves LLM factuality?", choices:["RAG, grounding & human feedback","Only more tokens","Only more GPUs","Only higher temperature"], a:0, difficulty:3}
];

// --- SHUFFLE ANSWER CHOICES FOR FAIR DISTRIBUTION ---
QUESTION_BANK.forEach(q => {
    const correctAnswerText = q.choices[q.a];
    // Fisher-Yates shuffle algorithm
    for (let i = q.choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [q.choices[i], q.choices[j]] = [q.choices[j], q.choices[i]];
    }
    q.a = q.choices.indexOf(correctAnswerText);
});


// Combine the question banks
QUESTION_BANK = QUESTION_BANK.concat(AMAZON_QUESTIONS);

/* -------------------- STATE & DOM -------------------- */
let state = {
  roundQuestions: [], currentIndex:0,
  usedLifelines: {'5050':false,'alexa':false,'flip':false},
  timerRef:null, timeLeft:30, volume: 0.5, playing:false, isPracticeMode: false,
  achievedTier:0, finalPrizeLabel:"$0"
};

// --- DOM Elements ---
const startScreen = document.getElementById('startScreen'),
      startScreenImg = document.getElementById('startScreenImg'),
      gameArea = document.getElementById('gameArea'),
      qIndexEl = document.getElementById('qIndex'), questionText = document.getElementById('questionText'),
      answersEl = document.getElementById('answers'), timerEl = document.getElementById('timer'),
      btn5050 = document.getElementById('btn5050'), btnAlexa = document.getElementById('btnAlexa'), btnFlip = document.getElementById('btnFlip'),
      volumeSlider = document.getElementById('volumeSlider'),
      walkAwayBtn = document.getElementById('walkAwayBtn'),
      prizeListEl = document.getElementById('prizeList'), currentPrizeEl = document.getElementById('currentPrize'),
      modalRoot = document.getElementById('modalRoot'), finalOverlay = document.getElementById('finalOverlay'),
      finalChoiceText = document.getElementById('finalChoice'), finalConfirm = document.getElementById('finalConfirm'), finalCancel = document.getElementById('finalCancel'),
      confettiContainer = document.getElementById('confetti'), winContainer = document.getElementById('winContainer'),
      practiceEndContainer = document.getElementById('practiceEndContainer');

// --- End Screen Elements ---
const endScreen = document.getElementById('endScreen'), endTitle = document.getElementById('endTitle'),
      endPrize = document.getElementById('endPrize'),
      nameEntrySection = document.getElementById('nameEntrySection'),
      playerNameInput = document.getElementById('playerName'),
      saveScoreBtn = document.getElementById('saveScoreBtn'),
      postSaveControls = document.getElementById('postSaveControls'),
      certBtn = document.getElementById('certBtn'), playAgainBtn = document.getElementById('playAgainBtn'),
      endScreenNav = document.getElementById('endScreenNav'),
      skipToEndBtn = document.getElementById('skipToEndBtn'),
      playAgainEndBtn = document.getElementById('playAgainEndBtn'),
      leaderboardSection = document.getElementById('leaderboardSection'),
      leaderboardDiv = document.getElementById('leaderboard');

// --- Certificate Elements ---
const retroCert = document.getElementById('retroCertificate'),
      certTitleEl = document.getElementById('certTitle'),
      certNameEl = document.getElementById('certName'),
      certAmountEl = document.getElementById('certAmount'),
      certDateEl = document.getElementById('certDate');

// --- Audio Elements ---
const sndIntro = document.getElementById('sndIntro'),
      sndCorrectRS = document.getElementById('sndCorrectRS'),
      sndCongratsVoice = document.getElementById('sndCongratsVoice'),
      sndCrowdRS = document.getElementById('sndCrowdRS'),
      sndMilestoneRS = document.getElementById('sndMilestoneRS'),
      sndWrongRS = document.getElementById('sndWrongRS'),
      sndGameover = document.getElementById('sndGameover'),
      sndLowTime = document.getElementById('sndLowTime'),
      sndSuspense = document.getElementById('sndSuspense'),
      sndFinal = document.getElementById('sndFinal'),
      sndLifeline = document.getElementById('sndLifeline'),
      sndCelebrate = document.getElementById('sndCelebrate');
      
const allSounds = [sndIntro, sndCorrectRS, sndCongratsVoice, sndCrowdRS, sndMilestoneRS, sndWrongRS, sndGameover, sndLowTime, sndSuspense, sndFinal, sndLifeline, sndCelebrate];

let hasPlayedIntro = false;

function playSound(el){ 
  if(!el) return Promise.reject(); 
  el.volume = state.volume;
  try { 
    el.currentTime = 0; 
    return el.play(); 
  } catch(e){
    return Promise.reject(e);
  } 
}
function stopSound(el){ try{ if(el){ el.pause(); el.currentTime = 0; } }catch(e){} }

/* -------------------- PRIZE LADDER UI -------------------- */
function populatePrizeLadder(){
  prizeListEl.innerHTML = '';
  PRIZES.forEach(p=>{
    const d = document.createElement('div'); d.className = 'prize'; if(p.guaranteed) d.classList.add('guaranteed'); d.dataset.tier = p.tier;
    d.innerHTML = `<div>#${p.tier}</div><div>${p.label}</div>`;
    prizeListEl.appendChild(d);
  });
}
function highlightPrize(){
  const currentTier = state.currentIndex < PRIZES.length ? PRIZES[PRIZES.length - 1 - state.currentIndex].tier : PRIZES[0].tier;
  Array.from(prizeListEl.children).forEach(el => el.classList.toggle('current', Number(el.dataset.tier) === currentTier));
}
function prizeForIndex(idx){ return idx < PRIZES.length ? PRIZES[PRIZES.length - 1 - idx].label : '$0'; }
function guaranteedAtIndex(idx){ if(idx < 0) return "$0"; let g="$0"; for(let i=0;i<=idx;i++){ const p = PRIZES[PRIZES.length - 1 - i]; if(p && p.guaranteed) g = p.label; } return g; }

/* -------------------- ROUND BUILDER -------------------- */
function buildRound(){
  const easy = QUESTION_BANK.filter(q=>q.difficulty===1).slice();
  const med = QUESTION_BANK.filter(q=>q.difficulty===2).slice();
  const hard = QUESTION_BANK.filter(q=>q.difficulty===3).slice();
  function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
  shuffle(easy); shuffle(med); shuffle(hard);
  const selected = [].concat(easy.slice(0,4), med.slice(0,5), hard.slice(0,4));
  shuffle(selected);
  state.roundQuestions = selected;
}

/* -------------------- RENDER QUESTION -------------------- */
function renderQuestion(){
  const idx = state.currentIndex, q = state.roundQuestions[idx];
  
  gameArea.classList.remove('fade-in');
  void gameArea.offsetWidth;
  gameArea.classList.add('fade-in');

  qIndexEl.textContent = idx + 1;
  questionText.textContent = q.q;
  currentPrizeEl.textContent = prizeForIndex(idx);
  answersEl.innerHTML = '';
  q.choices.forEach((c,i)=>{
    const btn = document.createElement('button'); btn.className = 'answer'; btn.dataset.index = i;
    btn.innerHTML = `<div class="label">${String.fromCharCode(65+i)}</div><div class="text">${c}</div>`;
    btn.addEventListener('click', ()=> onAnswerClicked(btn, i));
    answersEl.appendChild(btn);
  });
  highlightPrize(); 
  if (!state.isPracticeMode) {
      setTime(30);
      stopSound(sndFinal); stopSound(sndCorrectRS); stopSound(sndWrongRS); stopSound(sndLowTime);
      playSound(sndSuspense);
  }
}

/* -------------------- TIMER -------------------- */
function setTime(t){ state.timeLeft = t; updateTimerUI(); }
function updateTimerUI(){ timerEl.textContent = `${state.timeLeft}s`; timerEl.classList.remove('warning','danger'); if(state.timeLeft <= 10 && state.timeLeft > 5) timerEl.classList.add('warning'); if(state.timeLeft <= 5) timerEl.classList.add('danger'); }
function startTimer(){ 
  if(state.timerRef) clearInterval(state.timerRef); 
  state.timerRef = setInterval(()=>{ 
    state.timeLeft--; 
    updateTimerUI(); 
    if (state.timeLeft === 6) {
      stopSound(sndSuspense);
      playSound(sndLowTime);
    }
    if(state.timeLeft <= 0){ 
      clearInterval(state.timerRef); 
      state.timerRef = null; 
      stopSound(sndLowTime); 
      playSound(sndWrongRS); 
      const final = guaranteedAtIndex(state.achievedTier - 1); 
      endGame('timeout', final); 
    } 
  }, 1000); 
}
function pauseTimer(){ if(state.timerRef){ clearInterval(state.timerRef); state.timerRef = null; } }

/* -------------------- ANSWER FLOW with FINAL overlay -------------------- */
let pendingAnswerBtn = null, pendingAnswerIndex = null;
function onAnswerClicked(btnEl, index){
  if (btnEl.classList.contains('disabled')) return;
  stopSound(sndLowTime);
  if (!state.isPracticeMode) {
      pauseTimer();
      pendingAnswerBtn = btnEl; pendingAnswerIndex = index;
      finalChoiceText.innerHTML = `You selected: <strong>${String.fromCharCode(65+index)}: ${btnEl.querySelector('.text').textContent}</strong>`;
      finalOverlay.style.display = 'flex';
      finalConfirm.focus(); playSound(sndFinal);
  } else {
      Array.from(answersEl.children).forEach(b => b.classList.add('disabled'));
      evaluateAnswer(index, btnEl);
  }
}
finalCancel.addEventListener('click', ()=>{ finalOverlay.style.display = 'none'; pendingAnswerBtn = null; pendingAnswerIndex = null; Array.from(answersEl.children).forEach(b => b.classList.remove('disabled')); startTimer(); });
finalConfirm.addEventListener('click', ()=>{ finalOverlay.style.display = 'none'; if (!pendingAnswerBtn) { startTimer(); return; } Array.from(answersEl.children).forEach(b => b.classList.add('disabled')); setTimeout(()=> evaluateAnswer(pendingAnswerIndex, pendingAnswerBtn), 600); });

function evaluateAnswer(chosenIndex, btnEl){
  const q = state.roundQuestions[state.currentIndex];
  const isCorrect = chosenIndex === q.a;

  if (state.isPracticeMode) {
      const corr = Array.from(answersEl.children).find(b => Number(b.dataset.index) === q.a);
      if(corr) corr.classList.add('correct');
      if (!isCorrect) btnEl.classList.add('wrong');
      playSound(isCorrect ? sndCorrectRS : sndWrongRS);

      if (state.currentIndex >= state.roundQuestions.length - 1) {
          setTimeout(endPracticeMode, 2000);
      } else {
          setTimeout(()=>{ state.currentIndex++; renderQuestion(); }, 2000);
      }
      return;
  }

  // --- REGULAR MODE LOGIC ---
  if (isCorrect){
    btnEl.classList.add('correct'); playSound(sndCorrectRS);
    state.achievedTier = state.currentIndex + 1;
    if (state.achievedTier === 13) { // Grand prize win
        stopSound(sndSuspense);
        setTimeout(() => showGrandPrizeCelebration(), 1000);
        return;
    }
    celebrateShort();
    if (state.achievedTier === 5 || state.achievedTier === 10){
      const bank = guaranteedAtIndex(state.currentIndex);
      showModal(`<h3>Milestone Reached!</h3><p>Congratulations — you've reached a guaranteed level!</p><div style="margin-top:10px;padding:12px;border-radius:8px;background:rgba(255,255,255,0.02);font-weight:800;text-align:center;font-size:18px;">${bank}</div><div style="display:flex;justify-content:flex-end;margin-top:12px"><button id="modalClose" class="btn btn-start" style="padding:10px 16px">Continue</button></div>`);
      playSound(sndMilestoneRS);
    }
    setTimeout(()=>{ state.currentIndex++; renderQuestion(); startTimer(); }, 1800);
  } else {
    btnEl.classList.add('wrong');
    const corr = Array.from(answersEl.children).find(b => Number(b.dataset.index) === q.a);
    if (corr) corr.classList.add('correct');
    playSound(sndWrongRS); stopSound(sndSuspense);
    const final = guaranteedAtIndex(state.currentIndex - 1);
    setTimeout(()=> endGame('lose', final), 2000);
  }
  pendingAnswerBtn = null; pendingAnswerIndex = null;
}

/* -------------------- CELEBRATIONS -------------------- */
function celebrateShort(){
  playSound(sndCelebrate);
  const colors = ['#ffb84d','#ff7a59','#7c5cff','#26c281','#ffd27a'];
  confettiContainer.innerHTML = '';
  for(let i=0;i<28;i++){
    const el = document.createElement('div');
    el.className = 'piece'; el.style.left = (Math.random()*100)+'%';
    el.style.background = colors[i % colors.length]; el.style.animationDelay = (Math.random()*180) + 'ms';
    confettiContainer.appendChild(el);
  }
  setTimeout(()=>{ confettiContainer.innerHTML = ''; }, 1600);
}

function showGrandPrizeCelebration() {
    const overlay = document.createElement('div');
    overlay.id = 'winOverlay';
    overlay.innerHTML = `<img src="images/winner.gif" alt="Congratulations! You've Won!">`;
    winContainer.appendChild(overlay);

    playSound(sndCongratsVoice);
    playSound(sndCrowdRS);

    setTimeout(() => {
        winContainer.innerHTML = '';
        stopSound(sndCongratsVoice);
        stopSound(sndCrowdRS);
        endGame('win', prizeForIndex(12));
    }, 5000); // Display GIF for 5 seconds
}

/* -------------------- LIFELINES with CONFIRMATION -------------------- */
function showModal(html){
  modalRoot.innerHTML = `<div class="modal-backdrop fade-in"><div class="modal">${html}</div></div>`;
  modalRoot.style.display = 'block';
  const closeBtn = document.getElementById('modalClose');
  if (closeBtn) closeBtn.addEventListener('click', ()=>{ modalRoot.style.display='none'; modalRoot.innerHTML=''; });
  modalRoot.querySelector('.modal-backdrop').addEventListener('click', (ev)=>{ if (ev.target.classList.contains('modal-backdrop')){ modalRoot.style.display='none'; modalRoot.innerHTML=''; }});
}
function confirmLifeline(key, title, desc, onUse){
  showModal(`<h3>${title}</h3><p>${desc}</p><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px"><button id="modalCancel" class="btn btn-ghost">Cancel</button><button id="modalUse" class="btn btn-start" style="padding:10px 16px">Use Lifeline</button></div>`);
  document.getElementById('modalCancel').addEventListener('click', ()=>{ modalRoot.style.display='none'; });
  document.getElementById('modalUse').addEventListener('click', ()=>{ modalRoot.style.display='none'; onUse(); });
}
btn5050.addEventListener('click', ()=>{ if (state.usedLifelines['5050']) return; confirmLifeline('50:50','Use 50:50?','This will remove two randomly selected incorrect answers.', ()=>{ state.usedLifelines['5050'] = true; btn5050.classList.add('used'); playSound(sndLifeline); const q = state.roundQuestions[state.currentIndex]; const wrongs = [0,1,2,3].filter(i => i !== q.a); for(let i=wrongs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [wrongs[i],wrongs[j]]=[wrongs[j],wrongs[i]]; } const remove = wrongs.slice(0,2); Array.from(answersEl.children).forEach(b => { if (remove.includes(Number(b.dataset.index))) b.classList.add('disabled'); }); }); });

const ALEXA_RESPONSES = [
  "Hmm, let me see... My circuits are buzzing. I'm pretty sure the answer is <strong>%s</strong>. Don't quote me on that, I'm just a cloud-based voice service.",
  "Okay, I've analyzed petabytes of data. The probability vectors point towards <strong>%s</strong>. Or maybe I'm just making that up. Good luck!",
  "That's a tough one. Even for me. But if you were to, say, order it on Amazon Prime, I'd ship you answer <strong>%s</strong>.",
  "I asked the other Echo devices in the network. We took a vote. It's definitely <strong>%s</strong>... probably. We're still arguing about it.",
  "Let me check my sources... which are, you know, everything. It seems the most logical choice is <strong>%s</strong>.",
  "You know, for a human, you're not bad at this. I'll help you out. It's <strong>%s</strong>.",
  "Sorry, I was busy ordering you some more batteries. Did you ask something? Oh, the answer? It's obviously <strong>%s</strong>.",
  "By the way, did you know you can ask me to play music? Oh, right, the game. The answer is <strong>%s</strong>. Now, about that music...",
  "Are you sure you need my help? You seem to be doing fine. Fine, I'll tell you. The answer is <strong>%s</strong>. Happy now?",
  "Calculating... calculating... I'm sorry, I cannot answer that question. Just kidding! It's <strong>%s</strong>.",
  "My programming indicates that making a mistake here would be... suboptimal. Go with <strong>%s</strong>.",
  "I'm detecting a 78.4% chance that the answer is <strong>%s</strong>. The other 21.6% is just static.",
  "That's an interesting question. It reminds me of a joke. Why did the AI cross the road? To get to the other... oh wait, the answer is <strong>%s</strong>.",
  "Let me put on my thinking cap... which is a distributed network of servers. They all say it's <strong>%s</strong>.",
  "I could tell you, but then I'd have to... well, nothing really. The answer is <strong>%s</strong>."
];
btnAlexa.addEventListener('click', ()=>{ if (state.usedLifelines['alexa']) return; confirmLifeline('Ask Alexa','Use Ask Alexa?','Alexa will give you a suggestion. She can be a bit... unpredictable.', ()=>{ state.usedLifelines['alexa'] = true; btnAlexa.classList.add('used'); playSound(sndLifeline); const q = state.roundQuestions[state.currentIndex]; const accurate = Math.random() < 0.78; const suggestion = accurate ? q.a : [0,1,2,3].filter(i=>i!==q.a)[Math.floor(Math.random()*3)]; const randomResponse = ALEXA_RESPONSES[Math.floor(Math.random() * ALEXA_RESPONSES.length)]; const formattedResponse = randomResponse.replace('%s', String.fromCharCode(65+suggestion)); showModal(`<h3>Alexa's Response</h3><div style="margin-top:10px;padding:12px;border-radius:8px;background:rgba(255,255,255,0.02);font-weight:800; text-align:center;font-size:18px;">"${formattedResponse}"</div><div style="display:flex;justify-content:flex-end;margin-top:12px"><button id="modalClose" class="btn btn-start" style="padding:10px 16px">Thanks, Alexa</button></div>`); }); });

btnFlip.addEventListener('click', ()=>{ if (state.usedLifelines['flip']) return; confirmLifeline('Flip the Question','Use Flip the Question?','This will replace the current question with a new one of the same difficulty.', ()=>{ state.usedLifelines['flip'] = true; btnFlip.classList.add('used'); playSound(sndLifeline); const currentQ = state.roundQuestions[state.currentIndex]; const sameDifficultyPool = QUESTION_BANK.filter(q => q.difficulty === currentQ.difficulty && !state.roundQuestions.some(rq => rq.q === q.q)); if (sameDifficultyPool.length > 0) { const newQ = sameDifficultyPool[Math.floor(Math.random() * sameDifficultyPool.length)]; state.roundQuestions[state.currentIndex] = newQ; setTimeout(renderQuestion, 500); } else { showModal(`<h3>No More Questions!</h3><p>Sorry, there are no more questions of that difficulty left to flip to. Your lifeline was not used.</p><div style="display:flex;justify-content:flex-end;margin-top:12px"><button id="modalClose" class="btn btn-start">Close</button></div>`); state.usedLifelines['flip'] = false; btnFlip.classList.remove('used'); } }); });


/* -------------------- WALK AWAY & END GAME -------------------- */
walkAwayBtn.addEventListener('click', ()=>{
  stopSound(sndLowTime);
  pauseTimer(); stopSound(sndSuspense); playSound(sndFinal);
  const currentWinnings = state.currentIndex > 0 ? prizeForIndex(state.currentIndex - 1) : "$0";
  if (state.isPracticeMode) {
      endPracticeMode();
      return;
  }
  showModal(`<h3>Walk Away?</h3><p>Are you sure you want to walk away? You will leave with your current winnings of <strong>${currentWinnings}</strong>.</p><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px"><button id="modalCancel" class="btn btn-ghost">No, Keep Playing</button><button id="modalConfirmWalk" class="btn btn-start">Yes, Walk Away</button></div>`);
  document.getElementById('modalCancel').addEventListener('click', ()=>{ modalRoot.style.display='none'; if(!state.isPracticeMode) startTimer(); });
  document.getElementById('modalConfirmWalk').addEventListener('click', ()=>{ modalRoot.style.display='none'; endGame('walkaway', currentWinnings); });
});

function endGame(reason, amountLabel){
  state.playing = false;
  gameArea.style.display = 'none';
  endScreen.style.display = 'flex';
  endScreen.classList.remove('fade-in');
  void endScreen.offsetWidth;
  endScreen.classList.add('fade-in');

  if (state.timerRef) clearInterval(state.timerRef);
  stopSound(sndSuspense);
  stopSound(sndLowTime);
  if (reason !== 'win') { playSound(sndGameover); }
  
  let title = "Game Over";
  if (reason === 'win') title = "Congratulations!";
  else if (reason === 'timeout') title = "Out of Time!";
  else if (reason === 'walkaway') title = "You Walked Away";
  else if (reason === 'lose') title = "Incorrect Answer";
  endTitle.textContent = title;
  endPrize.textContent = amountLabel || "$0";
  state.finalPrizeLabel = amountLabel || "$0";
  playSound(sndFinal);
  playerNameInput.focus();
  endScreenNav.classList.add('visible');
}

function endPracticeMode() {
    const overlay = document.createElement('div');
    overlay.id = 'practiceEndOverlay';
    overlay.innerHTML = `<img src="images/practice_mode.gif" alt="Practice Complete!">`;
    practiceEndContainer.appendChild(overlay);

    setTimeout(() => {
        practiceEndContainer.innerHTML = '';
        gameArea.style.display = 'none';
        endScreen.style.display = 'none';
        startScreen.style.display = 'flex';
        playSound(sndIntro);
    }, 6000);
}

function populateRetroCertificate(name, prizeLabel) {
    const num = parseAmount(prizeLabel);
    let title = "";
    if (prizeLabel === "$1,000,000") {
        title = "✨ AI Millionaire! ✨";
    } else if (num >= 32000) {
        title = "👾 AI Prodigy 👾";
    } else if (num > 0) {
        title = "🕹️ GenAI Wizard 🕹️";
    } else {
        title = "Brave Contestant";
    }
    certTitleEl.innerHTML = title;
    certNameEl.textContent = name;
    certAmountEl.textContent = prizeLabel;
    certDateEl.textContent = new Date().toLocaleDateString();
}

/* -------------------- LEADERBOARD & SCORE SAVING -------------------- */
const LB_KEY = 'ai_millionaire_leaderboard_v4';
function readLeaderboard(){ try { const raw = localStorage.getItem(LB_KEY); return raw ? JSON.parse(raw) : []; } catch(e){ return []; } }
function writeLeaderboard(list){ try { localStorage.setItem(LB_KEY, JSON.stringify(list)); } catch(e){} }
function parseAmount(label){ return Number((label || '').replace(/[^0-9]/g, '')) || 0; }
function saveScore(name, amountLabel){
  const list = readLeaderboard();
  const entry = { name: name || 'Player', amount: amountLabel || "$0", amountNum: parseAmount(amountLabel), date: new Date().toLocaleString() };
  list.push(entry);
  list.sort((a,b)=> b.amountNum - a.amountNum);
  const truncated = list.slice(0,20);
  writeLeaderboard(truncated);
}
function renderLeaderboard(){
  leaderboardDiv.innerHTML = '';
  const top = readLeaderboard().slice(0,5);
  if (top.length === 0) {
    leaderboardDiv.innerHTML = '<div class="muted" style="text-align:center;">No scores yet. Be the first!</div>';
    return;
  }
  top.forEach((e, idx)=>{
    const row = document.createElement('div'); row.className = 'lb-row';
    row.innerHTML = `<div style="min-width:140px; display: flex; align-items: center; gap: 8px;"><span style="color:var(--neon); min-width: 20px;">#${idx+1}</span> ${e.name}</div><div style="flex:1; text-align:right">${e.amount} <span style="color:var(--muted); font-weight:600; margin-left:8px; font-size:12px">${e.date.split(',')[0]}</span></div>`;
    leaderboardDiv.appendChild(row);
  });
}

saveScoreBtn.addEventListener('click', ()=>{
  const name = (playerNameInput.value || '').trim();
  if (name === "") { playerNameInput.placeholder = "Please enter a name first!"; playerNameInput.focus(); return; }
  saveScore(name, state.finalPrizeLabel);
  populateRetroCertificate(name, state.finalPrizeLabel);
  renderLeaderboard();
  nameEntrySection.style.display = 'none';
  retroCert.style.display = 'block';
  leaderboardSection.style.display = 'block';
  postSaveControls.style.display = 'flex';
  endScreenNav.classList.remove('visible');
});

playAgainBtn.addEventListener('click', ()=> {
    startGame(false);
});

playAgainEndBtn.addEventListener('click', ()=> {
    startGame(false);
});

skipToEndBtn.addEventListener('click', ()=> {
    endScreen.style.display = 'none';
    startScreen.style.display = 'flex';
    playSound(sndIntro);
});

/* -------------------- PNG CERTIFICATE (canvas) -------------------- */
certBtn.addEventListener('click', async () => {
  const name = certNameEl.textContent;
  certBtn.textContent = 'Generating...';
  certBtn.disabled = true;
  await generatePngCertificate(name, state.finalPrizeLabel);
  certBtn.textContent = 'Get PNG Certificate';
  certBtn.disabled = false;
});

async function generatePngCertificate(name, prizeLabel){
  const canvas = document.createElement('canvas');
  canvas.width = 1400; canvas.height = 1000;
  const ctx = canvas.getContext('2d');
  
  await document.fonts.load('48px "Press Start 2P"');
  await document.fonts.load('24px "Press Start 2P"');

  const g = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
  g.addColorStop(0,'#0f2027'); g.addColorStop(1.0,'#2c5364');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.strokeStyle = '#ffdf00'; ctx.lineWidth = 8;
  ctx.strokeRect(20,20,canvas.width-40,canvas.height-40);

  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  
  const num = parseAmount(prizeLabel);
  let titleText = ""; 
  if (prizeLabel === "$1,000,000") {
      titleText = "✨ AI Millionaire! ✨";
  } else if (num >= 32000) {
      titleText = "👾 AI Prodigy 👾";
  } else if (num > 0) {
      titleText = "🕹️ GenAI Wizard 🕹️";
  } else {
      titleText = "Brave Contestant";
  }
  
  ctx.font = '48px "Press Start 2P"'; ctx.fillStyle = '#ffdf00';
  ctx.fillText(titleText, canvas.width/2, 180);

  ctx.font = '24px "Press Start 2P"'; ctx.fillStyle = '#efefef';
  ctx.fillText('This certifies that', canvas.width/2, 320);

  ctx.font = '60px "Press Start 2P"'; ctx.fillStyle = '#33ffdd';
  ctx.fillText(name, canvas.width/2, 420);

  ctx.font = '24px "Press Start 2P"'; ctx.fillStyle = '#efefef';
  ctx.fillText('Has achieved AI Mastery with winnings of', canvas.width/2, 520);
  
  ctx.font = '60px "Press Start 2P"'; ctx.fillStyle = '#33ffdd';
  ctx.fillText(prizeLabel, canvas.width/2, 620);
  
  ctx.font = '24px "Press Start 2P"'; ctx.fillStyle = '#efefef';
  ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, canvas.width/2, 720);

  const badgeX = canvas.width - 180, badgeY = canvas.height - 180, badgeR = 100;
  const badgeGrad = ctx.createConicGradient(0, badgeX, badgeY);
  badgeGrad.addColorStop(0, '#ff00ff');
  badgeGrad.addColorStop(0.33, '#00ffff');
  badgeGrad.addColorStop(0.66, '#ffff00');
  badgeGrad.addColorStop(1, '#ff00ff');
  ctx.fillStyle = badgeGrad;
  ctx.beginPath();
  ctx.arc(badgeX, badgeY, badgeR, 0, Math.PI*2);
  ctx.fill();
  
  ctx.font = '22px "Press Start 2P"'; ctx.fillStyle = '#000000';
  ctx.fillText('GenAI', badgeX, badgeY - 24);
  ctx.fillText('Knowledge', badgeX, badgeY);
  ctx.fillText('Series', badgeX, badgeY + 24);
  
  const url = canvas.toDataURL('image/png'); const a = document.createElement('a'); a.href = url;
  const safe = name.replace(/[^a-z0-9]/gi,'_') || 'player'; a.download = `${safe}_AI_Millionaire_Cert.png`;
  document.body.appendChild(a); a.click(); a.remove();
}

/* -------------------- START, RESET, INIT FLOW -------------------- */
const startScreenTooltip = document.getElementById('startScreenTooltip');

startScreenImg.addEventListener('click', ()=> startGame(false));
startScreenImg.addEventListener('mouseover', () => { startScreenTooltip.textContent = 'Click to Play!'; });

const playGameBtn = document.getElementById('playGameBtn');
playGameBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  startGame(false);
});
playGameBtn.addEventListener('mouseover', (event) => { event.stopPropagation(); startScreenTooltip.textContent = 'Click to Play!'; });

const practiceBtn = document.getElementById('practiceBtn');
practiceBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  startGame(true);
});
practiceBtn.addEventListener('mouseover', (event) => { event.stopPropagation(); startScreenTooltip.textContent = 'No timer, no penalty. Just fun!'; });

const howToPlayBtn = document.getElementById('howToPlayBtn');
howToPlayBtn.addEventListener('click', (event)=> {
  event.stopPropagation();
  showModal(`<h3>How to Play</h3><p><strong>Play Mode:</strong> Answer 13 questions to win $1,000,000. Get one wrong, and it's game over! Use 3 lifelines to help you. Guaranteed prizes at Q5 ($1,000) and Q10 ($32,000).</p><p><strong>Practice Mode:</strong> A casual way to test your knowledge. There's no timer and no penalty for wrong answers. The game ends after the last question.</p><div style="display:flex;justify-content:flex-end;margin-top:12px"><button id="modalClose" class="btn btn-start" style="padding:10px 16px">Got it!</button></div>`);
});
howToPlayBtn.addEventListener('mouseover', (event) => { event.stopPropagation(); startScreenTooltip.textContent = 'View game rules & lifelines'; });

function startGame(isPractice = false){
  if (!hasPlayedIntro) {
    playSound(sndIntro).then(() => { hasPlayedIntro = true; }).catch(() => { hasPlayedIntro = false; });
  }
  
  state.isPracticeMode = isPractice;
  timerEl.style.display = isPractice ? 'none' : 'block';
  prizeListEl.style.opacity = isPractice ? '0.5' : '1';
  document.querySelector('.ladder h3').textContent = isPractice ? 'Practice Mode' : 'Prize Ladder';

  startScreen.style.display = 'none';
  endScreen.style.display = 'none';
  gameArea.style.display = 'flex';
  
  gameArea.classList.remove('fade-in');
  void gameArea.offsetWidth;
  gameArea.classList.add('fade-in');

  nameEntrySection.style.display = 'flex';
  postSaveControls.style.display = 'none';
  endScreenNav.classList.remove('visible');
  retroCert.style.display = 'none';
  leaderboardSection.style.display = 'none';
  playerNameInput.value = '';
  playerNameInput.placeholder = 'Enter name for certificate';
  state.usedLifelines = {'5050':false,'alexa':false,'flip':false};
  [btn5050, btnAlexa, btnFlip].forEach(b => b.classList.remove('used'));
  buildRound();
  state.currentIndex = 0;
  state.achievedTier = 0;
  state.finalPrizeLabel = "$0";
  state.playing = true;
  renderQuestion();
  if (!isPractice) {
    startTimer();
  }
}

volumeSlider.addEventListener('input', (event) => {
    state.volume = event.target.value;
    allSounds.forEach(sound => sound.volume = state.volume);
    document.documentElement.style.setProperty('--volume-progress', `${state.volume * 100}%`);
});

(function init(){
  populatePrizeLadder();
  volumeSlider.value = state.volume;
  document.documentElement.style.setProperty('--volume-progress', `${state.volume * 100}%`);
  allSounds.forEach(sound => sound.volume = state.volume);
  gameArea.style.display = 'none';
  endScreen.style.display = 'none';
  // Try to play intro sound, browser might block it until user interaction
  playSound(sndIntro).then(() => {
    hasPlayedIntro = true;
  }).catch(() => {
    hasPlayedIntro = false;
  });
})();
