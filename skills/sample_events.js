module.exports = function (controller) {

    var acronyms_map = new Map([
        ["SWG", "Secure Web Gateway\n\nA Secure Web gateway is a solution that filters unwanted software/malware from user-initiated Web/Internet traffic and enforces corporate and regulatory policy compliance.\n"],
        ["CDFW", "Cloud Delivered Firewall\n\nCloud-Delivered Firewall (CDF). Provides web application security, content caching, application delivery and load balancing through a global content delivery network."],
        ["ClickHouse", "ClickHouse\n\nClickHouse was developed by the Russian IT company Yandex for the Yandex. Metrica web analytics service. ClickHouse allows analysis of data that is updated in real time. The system is marketed for high performance. The project was released as open-source software under the Apache 2 license in June 2016. [6] ClickHouse is used by the Yandex. Tank load testing tool. [6] Yandex. Market uses ClickHouse to monitor site accessibility and KPIs.[7] ClickHouse was also implemented at CERN’s LHCb experiment[8] to store and process metadata on 10 billion events with over 1000 attributes per event, and Tinkoff Bank uses ClickHouse as a data store for a project."],
        ["CASB", "Cloud Access Security Broker\n\A cloud access security broker (CASB) is a software tool or service that sits between an organization's on-premises infrastructure and a cloud provider's infrastructure. A CASB acts as a gatekeeper, allowing the organization to extend the reach of their security policies beyond their own infrastructure"],
        ["CWS", "Cloud Web Security\n\nThe Cloud Web Security product provides security and control for the distributed enterprise across one of the top attack vectors: the web. Users are protected on any device and in any location through Cisco worldwide threat intelligence and advanced threat defense capabilities."],
        ["SIG", "Secure Internet Gateway\n\nSecure Internet Gateway helps to monitor, track and protect enterprise network from suspicious traffic in the internet"],
        ["SD-WAN", "Software defined networking in a wide area network\n\nSD-WAN is an acronym for software-defined networking in a wide area network. SD-WAN simplifies the management and operation of a WAN by decoupling the networking hardware from its control mechanism"],
        ["FWAAS", "Firewall as a service\n\nFirewall as a Service (FWaaS) is a new way of delivering firewall and other network security capabilities as a cloud service. Enterprises have always deployed next generation firewalls as appliances. Firewall as a Service (FWaaS) is a new type of a next generation firewall"],
        ["MPLS", "Multiprotocol Label Switching\n\nMultiprotocol Label Switching is a protocol-agnostic routing technique designed to speed up and shape traffic flows across enterprise wide area and service provider networks."],
        ["DIA", "Direct Internet Access\n\nDirect Internet Access (DIA) is the ultimate reliability and a rock-solid connection to the internet, Direct Internet Access (DIA) is a robust solution for businesses heavily reliant on being connected, where continuous and reliable online access is of the utmost importance."],
        ["DCA", "Direct Cloud Access\n\nThe Direct Cloud Access (DCA) feature allows traffic from trusted applications, part of well-trusted domains, to pass the local Internet security check because traffic from these trusted applications have a lower security risk than untrusted Internet sites"],
        ["DNR", "Domain Name Resolver (DNR)\n\nDomain name resolver is the function that converts a domain name, whether private or on the public Internet, into an IP address"],
        ["Domain Name Resolver", "Domain name resolver is the function that converts a domain name, whether private or on the public Internet, into an IP address"],
        ["INTELLIGENT PROXY", "The intelligent proxy is the ability for Cisco Umbrella to intercept and proxy requests for malicious files embedded within certain so-called \"grey\" domains. Some websites, especially those with large user communities or the ability to upload and share files, have content that most users want to access while also posing a risk because of the possibility of hosting malware. Administrators don't want to block access to the whole \"grey\" domain for everyone but they also don't want your users to access files that could harm their computers or compromise company data. With the use of a proxy, we avoid the need to proxy requests to domains that are already known to be safe or bad. Most phishing, malware, ransomware, and other threats are hosted on domains that are classified as malicious. It's simple: Umbrella block those threats at the DNS layer, with no need to proxy. A domain that poses no threat, such as a content-carrying domain (CDN) for Netflix or YouTube? Umbrella allows it, and again, no proxy is required. You can use a proxy to intercept and inspect web traffic, but proxying connections often adds latency and complexity. Umbrella’s intelligent proxy only routes the requests for risky domains for deeper inspection. ... Umbrella uses the Domain Name System (DNS) as the primary mechanism"],
        ["DDOS", "Distributed Denial of Service Attacks\n\nA denial-of-service attack is a cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet"],
        ["VIPTELA", "Viptela provides Software-Defined Wide Area Network (SD-WAN) technology that allows global companies to build cost-effective WANs"],
        ["MERAKI", "Cisco Meraki devices automatically connect to the Cisco Meraki cloud over SSL, register with your network, and download their configuration. You have complete visibility and control over your entire network over the web. Configure thousands of devices, run diagnostics, or view reports with a few clicks"],
        ["POLYMORPHIC MALWARE", "polymorphic malware is a type of malware that constantly changes its identifiable features in order to evade detection. Many of the common forms of malware can be polymorphic, including viruses, worms, bots, trojans, or keyloggers"],
        ["CRYPTOJACKING", "Websites with embedded scripts to mine cryptocurrency which use the visitor's web browser. The script may belong to the owner of the web site, or injected by a malicious third-party, and is used as a method of generating revenue. Cryptojacking: Secret use of business’ computing power to mine cryptocurrencies through individual machines. Done in browser JavaScript exploits, cloud AWS instances, etc. Cryptomining: The process of generating new units of the cryptocurrency. Bitcoin example: A miner uses their computing power to verify P2P Bitcoin transactions Rewarded with new Bitcoins proportional to the amount of computing power they donated to the Bitcoin network"],
        ["CRYPTOMINING", "is a process in which transactions for various forms of cryptocurrency are verified and added to the blockchain digital ledger. Also known as cryptocoin mining, altcoin mining, or Bitcoin mining (for the most popular form of cryptocurrency, Bitcoin), cryptocurrency mining has increased both as a topic and activity as cryptocurrency usage itself has grown exponentially in the last few years.Each time a cryptocurrency transaction is made, a cryptocurrency miner is responsible for ensuring the authenticity of information and updating the blockchain with the transaction. The mining process itself involves competing with other cryptominers to solve complicated mathematical problems with cryptographic hash functions that are associated with a block containing the transaction data"],
        ["Attributes", "In computing, an attribute is a specification that defines a property of an object, element, or file. It may also refer to or set the specific value for a given instance of such. For clarity, attributes should more correctly be considered metadata. An attribute is frequently and generally a property of a property"],
        ["BOGON", "are IP Addresses that are known to belong to reserved IP address spaces that is supposedly unallocated or undelagated. Sites in this category are bogons that are known to be sending traffic"],
        ["CATO", "Cloud Acpproval to Operate"],
        ["CSDL", "Cisco Secure Development Lifecycle"],
        ["Account 0", "Refers to all users who do not have a specific account"],
        ["Advanced DNS", "A service offered through D-Link where ENDS queries containing a unique device ID (based upon serial number) are sent to special OpenDNS resolver IP addresses. The serial number is used to report Device activation only"],
        ["BFG", "The internal web page providing the navigation to many internal reports and applications."],
        ["Blocked Page Bypass", "The feature that lets configured users bypass the blocked page, serving the original desired web page from an OpenDNS proxy that obtains the page from the origin server"],
        ["Brain definition", "The software that reads user Preferences from the database, converts the filtering rules to an internal binary format, and sends the updates to all the resolvers"],
        ["Brotato", "Similar to broseph or brosnake, but with a twist. Also means bro / brother"],
        ["Category", "An OpenDNS named grouping of ClientIP definition IP address of origin DNS request, embedded in DNS queries sent to Google and other partners participating. See Client IP"],
        ["Closed Network", "Network configuration option for Network address ranges where IPs within range share settings, and IPs within range are not available for separate settings. Closed Networks trump Device IDs in opendnscache"],
        ["Device ID", "A unique identifier tied to a specific device (or potentially a specific user) that can be used for filtering, reporting"],
        ["Domain Name", "A domain name is an identification string that defines a realm of administrative autonomy, authority, or control on the Internet. Domain names are formed by the rules and procedures of the Domain Name System (DNS). See http://en.wikipedia.org/wiki/Domain_name"],
        ["Dynamic IP", "When the computer's IP address is assigned newly each time. See http://en.wikipedia.org/wiki/Dynamic_ip#Dynamic_IP"],
        ["EDNS", "Extension mechanisms for DNS (EDNS) is a specification for expanding the size of several parameters of the Domain Name System (DNS) protocol which had size restrictions that the Internet engineering community deemed too limited for increasing functionality of the protocol. The first set of extensions was published in 1999 by the Internet Engineering Task Force as RFC 2671, also known as EDNS0 See http://en.wikipedia.org/wiki/Extension_mechanisms_for_DNS Note we use EDNS0 for activation tracking"],
        ["FQDN", "A Fully Qualified Domain Name (FQDN), referred as an absolute domain name, Salesforce is a domain name that specifies its exact location in the tree hierarchy of the Domain Name System (DNS). It specifies all domain levels, including the top-level domain and the root zonecitation needed. A fully qualified domain name is distinguished by its lack of ambiguity: it can only be interpreted one way. See http://en.wikipedia.org/wiki/Fqdn"],
        ["Guide", "The search results page provided by the lander when the resolver cannot find an IP address, instead of a \"Web Site not Found\" message"],
        ["Live Parental Controls", "Refers to Netgear service offering. We developed the Client Management Utility and User Management Utility"],
        ["MSP", "Managed Serviced Provider\n\nManaged Service Provider In our case, this refers to a company that setup Internet Access for other companies. See http://en.wikipedia.org/wiki/Managed_service_provider"],
        ["MSSP", "Managed Security Service Provider\n\nManaged Security Service Provider (MSSP) An managed security service provider (MSSP) provides outsourced monitoring and management of security devices and systems. Common services include managed firewall, intrusion detection, virtual private network, vulnerability scanning and anti-viral services."],
        ["PPOV", "Cisco Umbrella Partner Proof of Value\n\nCisco Umbrella Proof of Value (PPoV) cloud-based console makes it easy to provision, manage, and ... value of their Umbrella trials from your own multi-org partner console"],
        ["Nomad", "An option where the updater client determines the user has changed networks and the new IP is automatically assigned to that users account (unless \"closed network\")."],
        ["Open ID", "A unique identifier for a user created item, such as an IP Address/Address Block or Device ID that can have filtering rules, statistics, customization, etc"],
        ["Open Network", "If a user account owns a range of IP addresses (is not /32), and the user allows the creation of \"child networks\" where each network can have different preferences, this is referred to as open network. (Note: if a Device ID is received for an open network, the preferences associated with the Device ID are honored instead of the ones associated with the network"],
        ["Policy", "A new construct composed of a set of filtering rules, times-of-day, customization that can be linked to one or more origin IDs"],
        ["Preferences", "The user defined settings for filtering, guide pages, block pages, customization"],
        ["Profile", "Sometime also referred to as Policies or Settings, refers to the set of user configurations (e.g. Web Filters, Stats, etc..) applied to an Origin ID (Network, Device ID, etc"],
        ["PROTOSS", "Project code name for effort to report and filter by user within a corporate network using the Active Directory objects"],
        ["TAHOE", "Tahoe is the name for the team that is working on the iOS and Android Umbrella solutions. It was also the code name for the project, and the technology is still referred to internally as Tahoe"],
        ["TYPE EXCEPTIONS", "A user configurable set of text strings for which the resolver should return NXDOMAIN responses (no IP address found)"],
        ["Updater", "Client computer software that sends IP addresses to OpenDNS (and others) so Dynamic IP changes are detected"],
        ["VLAN", "In computer networking, a single layer-2 network may be partitioned to create multiple distinct broadcast domains, which are mutually isolated so that packets can only pass between them via one or more routers; such a domain is referred to as a virtual local area network, virtual LAN or VLAN"],
        ["WEBGIN", "Software method for signaling the origin ID from the resolver to the Lander."],
        ["ZERG", "Project code name for effort to develop new client software that uses ENDS embedded IDs instead of public Network IPs, allowing mobile browsers to use our services better"],
        ["CAMP", "Cloud Application Management for Platforms"],
        ["CDN", "Content Delivery Network"],
        ["IAAS", "Infrustructure as a Service"],
        ["IPAAS", "Integration Platform as a Service"],
        ["KVM", "Kernel based Virtual Machine"],
        ["PAAS", "Platform as a Service"],
        ["AID", "Redundant Array of Independent Disks"],
        ["SDN", "Software Defined Netowrking"],
        ["VDI", "virtual Desktop Inftrustructure\n\nVDI is the practice of hosting a desktop operating system within a virtual machine (VM) running on a centralized server while users access these virtual desktops using their existing computer. VDI is only one form of desktop virtualization"],
        ["VPC", "Virtual Private Cloud"],
        ["VPD", "Virtual Private Desktop - VPD is a form of desktop virtualization delivering end-users mobility and the freedom to access virtual desktops anytime, from anywhere, on any device. Desktop virtualization utilizes server hardware to run desktop operating systems and application software inside a virtual machine. Users access these virtual desktops using their existing computer"],
        ["VPS", "Virtual Private Server\n\nA virtual private server is a virtual machine sold as a service by an Internet hosting service. The virtual dedicated server has also a similar meaning"],
        ["ISR", "Integrated Service Router"],
        ["LDAP", "Lightweight Directory Access Protocol\n\nThe Lightweight Directory Access Protocol is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an Internet Protocol network"],
        ["ELA", "Enterprise Level Agreement"],
        ["CTA", "Cognitive Threat Analytics"],
        ["SAML", "Security Assertion Markup Language\n\nSecurity Assertion Markup Language is an open standard for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider. SAML is an XML-based markup language for security assertions"],
        ["BPB", "Block Page Bypass\n\nA Block Page Bypass user is a special role that is given to individuals to provide them the ability to bypass pages that are typically blocked by your policy. They won't have the ability to change any policy settings, view any reports, and have limited access to the Web Dashboard"],
        ["CCW", "Cisco Commerce Workspace"],
        ["TG", "Technology Group"],
        ["AMP", "Advanced Malware Protection\n\nHackers are creating advanced malware that can evade even the best point-in-time detection tools, like antivirus and intrusion prevention systems. ... Cisco® Advanced Malware Protection (AMP) goes beyond point-in-time capabilities and is built to protect organizations before, during, and after an attack"],
        ["CMS", "Content Management System\n\nA content management system manages the creation and modification of digital content. It typically supports multiple users in a collaborative environment. CMS features vary widely. Most CMSs include Web-based publishing, format management, history editing and version control, indexing, search, and retrieval"],
        ["CVE", "Common Vulnerabilities and Exposures\n\nThe Common Vulnerabilities and Exposures (CVE) system provides a reference-method for publicly known information-security vulnerabilities and exposures"],
        ["URC", "Umbrella Roaming Clicnt\n\nThe Umbrella roaming client is a very lightweight DNS client that runs on your Windows or Mac OSX computers. It is not a VPN client or a local anti-virus engine. It allows Umbrella security and policy-based protection, including our intelligent proxy, to be enforced no matter the network you are connected to"],
        ["ERC", "Enterprise Roaming client\n\nCisco Umbrella Enterprise Roaming Client (ERC) could allow an authenticated, local attacker to elevate privileges to Administrator. To exploit the vulnerability, the attacker must authenticate with valid local user credentials"],
        ["SSH", "Secure Shell\n\nSecure Shell is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line login and remote command execution, but any network service can be secured with SSH"],
        ["GLP", "Global Price List"],
        ["BPB", "Block Page Bypass\n\nA Block Page Bypass user is a special role that is given to individuals to provide them the ability to bypass pages that are blocked"],
        ["BPG", "Boarder Gateway Protocol\n\nBorder Gateway Protocol is a standardized exterior gateway protocol designed to exchange routing and reachability information among autonomous systems on the Internet. The protocol is classified as a path vector protocol"],
        ["SQL", "Structured Query Language\n\nStructured Query Language (SQL) is a standard computer language for relational database management and data manipulation. SQL is used to query, insert, update and modify data"],
        ["GPO", "Global Policy Order"],
        ["IDN TLD", "Internationalized Domain Names Top Level Domains"],
        ["MOC", "Multi-Org Console\n\nThe Cisco Umbrella Multi-Org console gives you the ability to manage multiple organization through a single instance of the console"],
        ["PSA", "Personal services automation"],
        ["RMM", "Remote monitoring and management\n\nRemote monitoring and management (RMM) is the process of supervising and controlling IT systems (such as network devices, desktops, servers and mobile devices) by means of locally installed agents that can be accessed by a management service provider"],
        ["ARD", "Apple Remote Desktop\n\nApple Remote Desktop is the best way to manage the Mac computers on the network. Distribute software, provide real-time online help to end users"],
        ["ARR", "Annual rate of return\n\nAnnual rate of return"],
        ["VAR", "Value Added Reseller"],
        ["GLO", "Global Licensing Organization"],
        ["NFR", "Not for relase"],
        ["DHCP", "Dynamic Host Configuration Protocol\n\nThe Dynamic Host Configuration Protocol is a network management protocol used on UDP/IP networks whereby a DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks"],
        ["MPLS", "Multiprotocol Label Switching\n\nMultiprotocol Label Switching (MPLS) is a routing technique in telecommunications networks that directs data from one node to the next based on short path labels rather than long network addresses, thus avoiding complex lookups in a routing table and speeding traffic flow"],
        ["CDN", "Content Delivery Network\n\nA content delivery network or content distribution network is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and high performance by distributing the service spatially relative to end-users"],
        ["ICYMI", "In case you missed it"],
        ["DGA", "Domain Generated Algorithms\n\nDomain generation algorithms (DGA) are algorithms seen in various families of malware that are used to periodically generate a large number of domain names that can be used as rendezvous points with their command and control servers"],
        ["SOP", "Standard Operating Procedure"],
        ["WSA", "Web Security Appliance\n\nCisco Web Security Appliance (WSA), powered by Cisco Talos, protects the user by automatically blocking risky sites and testing unknown sites before allowing"],
        ["PAC file", "proxy auto-config A proxy auto-config (PAC) file defines how web browsers and other user agents can automatically choose the appropriate proxy server (access method) for fetching a given URL. A PAC file contains a JavaScript function “ FindProxyForURL(url, host)"],
        ["SIEM", "Security Information and Event Management\n\nSecurity information and event management software products and services combine security information management and security event management. They provide real-time analysis of security alerts generated by applications and network hardware"],
        ["PSE", "Professional Services Engineer"],
        ["TME", "Technical Marketing Engineer"],
        ["AVC", "Application Visibility and Control\n\nApplication visibility & control functionality protects networks against application-level threats that can penetrate and proliferate in the network."],
        ["IAAS", "Infrastructure as a Service"],
        ["PAAS", "Platform as a Service"],
        ["CASB", "Cloud Access Security Brokers"],
        ["RPC", "Remote procedure call"],
        ["CCW", "Cisco Commerce Workspace"],
        ["ASA", "Adaptive Security Appliance"],
        ["SMTP", "Simple Mail Transfer Protocol"],
        ["SMTP server", "Simple Mail Transfer Protocol"],
        ["SHS", "Secure Hotspot"],
        ["FQDN", "Fully Qualified Domain Names"],
        ["PPOV", "Partner Proof of Value"],
        ["SOC", "Systems and Organization Controls"],
        ["SWSS", "Software Support Service"],
        ["VTA", "Vertical Architects"],
        ["ASIG", "Advanced Security Initiatives Group"],
        ["TAC", "Technical Assistance Center"],
        ["INFOSEC", "Information Security"],
        ["GGSG", "Global Government Solutions Group"],
        ["CSPO", "Cisco Corporate Security Programs Organization"],
        ["S&TO", "Security and Trust Organization"],
        ["GSX", "Cisco Global Sales Conference"],
        ["S&TO", "Security and Trust Organization"],
        ["GSX", "Cisco Global Sales Conference"],
        ["GSSO", "Global Security Sales Organization"],
        ["DPL", "Design Pattern Library"],
        ["VA", "Virtual Appliances\n\nA virtual appliance is a pre-configured virtual machine image, ready to run on a hypervisor; virtual appliances are a subset of the broader class of software appliances. Installation of a software appliance on a virtual machine and packaging that into an image creates a virtual appliance.\n"],
        ["CDO", "Cisco Defense Orchestrator\n\nCisco Defense Orchestrator helps a network operations team easily manage policies across Cisco security products.  Simplify and unify policy across Cisco firewalls, next-generation firewalls, Cisco Web Security Appliances, and Cisco Umbrella.\n"],
        ["DCLOUD", "Cisco’s Cloud-Based Demos & Lab Platform"],
        ["STLDP", "SE Transitions & Leadership Development Program (global, nomination-only, high potential leadership development program for Systems Engineers.)\n"],
        ["CATO", "Cloud Approval to Operate (All Cisco Cloud Offerings)\n"],
        ["FE", "Fast Ethernet"],
        ["FEC", "Fast EtherChannel"],
        ["FECPM", "Fast Ethernet Combo Port Module"],
        ["FQDN", "fully qualified domain name"],
        ["FQPCID", "fully qualified procedure correlation identifier"],
        ["FREEDM", " Frame EnginE and Data link Manager"],
        ["FRMR", "Frame Reject"],
        ["FROM", "FrameRelay over MPLS"],
        ["FRoM", "FrameRelay over MPLS"],
        ["FROMPLS", "FrameRelay over MPLS"],

        ["ASA", "Adaptive Security Appliance\n\nCisco ASA is a security device that combines firewall, antivirus, intrusion prevention, and virtual private network (VPN) capabilities."],
        ["FTD", "Firepower Threat Defense\n\nCisco Firepower Threat Defense (FTD) is a unified software image, which includes the Cisco ASA features and FirePOWER Services. This unified software is capable of offering the function of ASA and FirePOWER in one platform, both in terms of hardware and software features\n"],
        ["TAC", "Technical Assistance Center\n\nTechnical Assistance Center, or TAC, is the department that's primary purpose is technical assistance. TAC also works closely with a the Network Operations Center, or NOC. The purpose of a TAC is to support customers with technical issues regarding the equipment developed/delivered by the company which delivers the TAC support.\n"],
        ["SAFE", "Scaled Agile Framework\n\nThe Scaled Agile Framework (abbreviated as SAFe), is a set of organization and workflow patterns intended to guide enterprises in scaling lean and agile development\n"],
        ["STATS", "Umbrella Reporting\n\nCisco Umbrella's reports offer a better understanding of Umbrella usage. Gain insights into request activity and blocked activities\n"],
        ["CCP", "Security Customer Connection program\n\nMonthly briefings covering Cisco Collaboration, Network Architecture, Security and Data Center solutions, product roadmaps, and technical topics requested by members. These Cisco Webex virtual meetings enable interactive discussions and Q&A.\n"],
        ["POC", "Proof of Concept\n\nProof of concept is a realization of a certain method or idea in order to demonstrate its feasibility, or a demonstration in principle with the aim of verifying that some concept or theory has practical potential. A proof of concept is usually small and may or may not be complete.\n"],
        ["EPM", "External Packet Memory"],

        ["PSBL", " Product Security Baseline\n\nThe Product Security Baseline (PSB) defines security-related functionality. PSB requirements are gathered from internal and external sources.\n"],
        ["PSIRT", "Product Security and Incident Response Team\n"],
        ["LMA", "Lifecycle Management Applications\n\n(used to release Cisco offerings)\n\nApplication lifecycle management (ALM) is the product lifecycle management (governance, development, and maintenance) of computer programs.\n"],
        ["PLM", "Product Lifecycle Management\n\nProduct life-cycle management is the succession of strategies by business management as a product goes through its life-cycle. The conditions in which a product is sold changes over time and must be managed as it moves through its succession of stages.\n"],
        ["AOEA", "Annuity Offer Enablement Automation\n"],
        ["CIE", "cloud infrastructure engineering\n\nCloud infrastructure engineering combine design, engineering, and technology skills to enable clients to use cloud computing systems.\n"],
        ["FDM", "Firepower Device Management\n\nFirepower Device Manager is a web-based local manager. Users only have to point their browser at the firewall in order to configure and manage the device. ... The Firepower Device Manager provides firewall management through a thin client. It does not include Java in its design.\n"],
        ["EDR", "Endpoint Detection and Response\n\nEndpoint detection and response is a technology addressing the need for continuous monitoring and response to advanced threats.\n"],

        ["CSDL", " Cisco Secure Development Lifecycle\n\nCisco Secure Development Lifecycle (CSDL) is a repeatable and measurable proces designed to increse Cisco product resiliency and trustworthiness.\n"],
        ["FMC", "Firepower Management Center\n"],
        ["TAM", "Technical Account Manager\n"],
        ["ISE", "Identify Services Engine (ISE)\n"],
        ["CSTA", "[Cisco Security Technology Alliance (CSTA)](http://app.campaignmgr.cisco.com/e/er?s=1865283171&lid=18392&elqTrackId=FB9E3C2E2F7ECA65C579CBFF08D50AB4&elq=f79660adaf324bb681164e052a0dc220&elqaid=4582&elqat=1)  \n"],
        ["PII", "Personally Identifiable Information\n"],
        ["DNS tunneling", "A method for encoding data making it look like a DNS query to exfiltrate sensitive data.\n"],
        ["DNS", "A method for encoding data making it look like a DNS query to exfiltrate sensitive data.\n"],
        ["ELT", "Executive Leadership Team\n"],
        ["SRC", "Security Readiness Criteria\n"],
        ["CPDM", "Cisco Product Development Methodology\n"],
        ["SRP", "Security Readiness Plan (formerly VCP)\n"],
        ["VCP", "Vulnerability Closure Plan"],
        ["SI", "Security Insights"],


    ]);

    controller.on('bot_space_join', function (bot, message) {
        bot.reply(message, 'Message me an Cisco Cloud Security acronym and I will tell you what it stands for!\n\n');
    });

    controller.hears(['.*'], 'direct_message,direct_mention', function (bot, message) {
        if (acronyms_map.has(message.text.toUpperCase()))
            bot.reply(message, acronyms_map.get(message.text.toUpperCase()));
        else
            bot.reply(message, "Sorry, that is not found in our system. Please try something different.");
    });


    controller.on('user_space_join', function (bot, message) {
        bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);
    });


};
