import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { global_styles } from '../../styles/global';
import Input from '../../components/input/Input';
import { navigationInterface } from '../../navigators/NavigationContainer';
import { assets_images } from '../../assets/assets_images';
import { Height } from '../../utils/dimensions';

export default function SearchScreen({ translate }: navigationInterface) {
    const [searchValue, setSearchValue] = useState('');
    const { search_for_something } = translate;
    return (
        <SafeAreaView>
            <View style={[{ padding: 10 }]}>
                <Input
                    style={{ height: 48 }}
                    asset={assets_images.search_grey}
                    setValue={setSearchValue}
                    value={searchValue}
                    autoFocus={true}
                    placeholder={search_for_something}
                />
            </View>

            <ScrollView style={[{ height: Height(75) }]}>
                {/* Your scrollable content here */}
                <View style={[global_styles.container, { paddingTop: 0 }]}>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam delectus enim omnis inventore quia officiis accusamus fugit nulla saepe. Praesentium error voluptate sapiente. Quia eius eum obcaecati consectetur eligendi?
                        Dolorum cumque dolor doloremque cupiditate sunt saepe similique iusto et accusantium! Omnis quam id iure quis in, totam deleniti ipsum non odit numquam aliquid eos laboriosam. Maxime odio non impedit?
                        Hic provident necessitatibus id reprehenderit! Ea amet necessitatibus, commodi nesciunt dolorum omnis delectus voluptatibus non nulla voluptas reprehenderit soluta doloremque. Nobis, dicta officiis praesentium veritatis similique autem dolor temporibus tempore.
                        Voluptates ipsam, quisquam nam dolorum tempore saepe porro quia inventore quasi alias? Deserunt doloremque dignissimos expedita dolorem quidem? Tempora magnam eum odit est rerum deserunt voluptate numquam ipsum, unde amet.
                        Aliquam dolor suscipit animi. Laudantium nisi minima nam sapiente veritatis fugiat? Aut rerum tempore autem laboriosam, dicta ab assumenda nobis praesentium doloremque facere animi nesciunt dolorum voluptas sunt culpa veniam.
                        Aliquid officia fugit maxime alias eaque, expedita quod dignissimos omnis exercitationem sed sapiente accusantium labore perspiciatis? Vero unde laborum ut inventore error ipsam labore quae, aliquam, aut suscipit minus illo?
                        Deserunt accusantium eum molestiae dolorum eligendi molestias eveniet incidunt necessitatibus omnis officia porro voluptatum est corrupti distinctio cupiditate, perferendis quas architecto! Ea quam reprehenderit rem ab iste optio sapiente quas.
                        Nemo quia, facilis vitae molestias repellat cupiditate exercitationem qui at nobis deserunt totam saepe placeat! Facere unde maiores, harum in quaerat praesentium non ipsa sed. Quaerat eaque voluptates id autem.
                        Itaque fugit fuga porro vitae. Aspernatur perferendis numquam maxime, minima autem ipsa fuga unde, voluptatum beatae dolores repudiandae neque, quia consectetur sapiente assumenda porro nihil corporis nam vel amet error!
                        Aliquid quod, eos excepturi repellat, earum quos voluptas modi dolore odit perspiciatis labore? Necessitatibus, aliquam alias. Perferendis nam exercitationem magnam voluptatibus saepe provident eum doloremque magni, sint, velit, necessitatibus inventore.
                        Optio, quibusdam nobis eos quis harum dolore porro iste impedit eum consectetur nisi ducimus praesentium aliquid dolores cumque similique explicabo, inventore illo dicta pariatur. Blanditiis nesciunt dolores quasi iste inventore.
                        Ipsa, tempore perspiciatis obcaecati assumenda laborum cum necessitatibus earum quos consequuntur voluptate quam accusantium ad dolorem quaerat nostrum a enim alias explicabo nobis molestias. Et eius vero voluptas odit nihil.
                        Aperiam earum dicta quasi animi fugit eaque mollitia perferendis nostrum, delectus saepe, aut distinctio nulla amet praesentium quia eos. Exercitationem delectus dolore modi unde eveniet aut numquam saepe laboriosam iste.
                        Sunt quam aperiam iste ad eaque et, dolorem, vero tempore necessitatibus rerum nulla temporibus pariatur iusto facilis animi unde nam a? Iusto ipsam beatae explicabo non nostrum quidem tempora quis!
                        Culpa minus eum reprehenderit a nulla iure ducimus praesentium, optio ex ipsam quae neque fugit autem voluptatem voluptas vitae impedit nisi totam odio modi. Ab debitis enim eius optio maxime.
                        Architecto est qui consequatur porro ex dolor nihil repellendus veritatis culpa minima, aliquid, quam aspernatur deserunt neque mollitia ipsum, placeat beatae. Expedita, dolorum voluptatibus optio nobis eum alias beatae sint!
                        Quae excepturi repellat, praesentium quibusdam vitae unde voluptates beatae ad, nemo soluta, recusandae natus impedit repellendus sequi similique. Earum quisquam eius iure alias saepe ut dicta excepturi, impedit corrupti veritatis.
                        Veniam facilis fugit natus quas ea commodi rem a molestiae laboriosam ad eaque optio, modi, similique vitae saepe eum minima doloremque hic porro libero. Debitis iste alias libero illum doloribus.
                        Deserunt amet neque cupiditate placeat assumenda facilis repellat totam laudantium est. Explicabo voluptates exercitationem maiores magni, nulla quidem dicta ex ut! Ullam fuga assumenda rerum dolorem quae itaque doloremque a?
                        Minus, dolore non! Laboriosam sequi mollitia vitae, quis reprehenderit perspiciatis atque architecto non dicta deleniti facilis explicabo. Asperiores quo eius ad ea beatae quibusdam ullam est facilis maxime laborum! Saepe.
                        Totam porro et consequuntur quisquam ullam unde, eveniet omnis accusamus incidunt perferendis aspernatur vitae. Voluptatem vitae culpa quae, vero explicabo quaerat, cum optio esse suscipit dolorum dolor odio omnis. Porro!
                        At quia earum, saepe vitae, autem, dolores quibusdam aut dignissimos exercitationem ad blanditiis. Nemo vitae non alias animi, consequatur dolores inventore vero numquam eaque dolor illo eum dignissimos magnam harum.
                        Illum quia fugiat incidunt quidem laborum autem eum laudantium ad porro dicta expedita, deleniti culpa nemo, iste corrupti officiis amet voluptatum eaque laboriosam ducimus earum sit possimus animi neque? Repellendus?
                        Tenetur natus debitis aliquam aspernatur doloremque dolor quod quia ab facere sit recusandae assumenda, quas non, similique inventore? Minima illum, repellat laudantium voluptatibus quaerat nisi possimus nemo officia cupiditate aliquid.
                        Voluptatem hic error aspernatur illum debitis, ipsa dolorum sequi vero numquam repudiandae, quidem officiis nesciunt itaque quasi magni accusantium eius ipsam quae enim consequatur, optio cumque commodi quis! Iusto, fugit?
                        Alias soluta molestias fugiat at neque numquam placeat mollitia quibusdam sapiente natus possimus qui officiis quod magnam eius exercitationem quas ullam eligendi, reprehenderit odio nostrum. Ea quis nisi ullam sit!
                        Harum qui omnis incidunt ad. Sint quod, totam ea similique aspernatur quas. Harum placeat nam, quas aliquam sequi quasi ad reiciendis eaque, necessitatibus omnis excepturi. Fugit itaque porro incidunt natus?
                        Cupiditate quos ducimus molestias unde consequuntur odit numquam nam aliquam, quia cumque reprehenderit quo sit eos exercitationem, perferendis veniam! Velit voluptas harum ducimus est saepe ipsum officiis deserunt vel nisi!
                        Harum, corrupti quia voluptatem aspernatur deserunt iure quo nemo voluptatum, beatae eligendi placeat eum ullam natus perspiciatis ad quidem veniam quibusdam nam. Repudiandae impedit similique deserunt at est unde vero.
                        Nihil, dolores inventore? Quidem sequi adipisci, minima quos aliquid corporis cumque nulla facilis molestiae ab, deleniti obcaecati, aperiam sit totam recusandae atque sunt repellendus quae nobis nostrum veniam accusantium similique.
                        Aliquam et minima maxime atque aliquid incidunt iste voluptatem placeat laboriosam at autem temporibus magnam nihil dolor laudantium cupiditate tempore sapiente voluptatum impedit, quisquam voluptas rem culpa. Ipsum, quia quasi?
                        Minus est necessitatibus sapiente quas, reprehenderit mollitia itaque tempora, similique dolorum eius id deserunt fugiat, quod et? Nostrum dolorem odio perferendis, voluptatem nihil, laudantium voluptatibus porro unde obcaecati, dolore vero.
                        Temporibus assumenda omnis voluptatum non nam culpa alias est incidunt enim unde, quo laboriosam, soluta ratione accusamus harum provident, minus nulla quam aperiam deleniti. Voluptatem qui modi exercitationem eius dolorum?
                        Rem, earum nemo. Ad nisi quisquam similique quasi fuga a nemo nostrum, rem alias, ipsa vero atque labore? Illo suscipit molestiae itaque laborum soluta dolore laudantium, quae sapiente nihil nesciunt.
                        Neque asperiores earum corrupti excepturi magnam, exercitationem inventore eveniet saepe illum, unde expedita repellat laudantium dolorum. Perspiciatis veritatis obcaecati voluptatibus inventore error quisquam reiciendis facere laudantium, molestias commodi, vitae exercitationem?
                        Temporibus hic quis, ullam necessitatibus aspernatur laudantium qui laborum natus nemo nostrum, ratione magni provident. Inventore, consequuntur a, assumenda nulla officia praesentium non quae ipsa excepturi similique pariatur eveniet dolores.
                        Nostrum fugiat quas culpa quisquam, voluptates molestias, repellat illo vel ducimus nulla incidunt consequatur est deleniti rerum voluptatem perferendis dolore dolorum voluptatibus quidem omnis praesentium odit mollitia! Provident, odio animi?
                        Quae, id. Non dolores sit nam recusandae dolor autem odio earum consequuntur corrupti sequi repellat quibusdam libero incidunt provident, deleniti adipisci voluptatibus sed. Eveniet omnis deleniti sequi! Deleniti, voluptate quibusdam.
                        Similique facilis soluta minima numquam nulla distinctio mollitia rerum, laboriosam iusto, ab rem quibusdam fuga veniam obcaecati et libero natus labore dolores nesciunt? Animi saepe, ab expedita sint molestias quae?
                        Natus doloremque impedit sequi dicta exercitationem incidunt, a iusto? Inventore autem veritatis necessitatibus fuga quidem quos eligendi vitae ipsum minima deserunt, temporibus amet, odit quibusdam sint tempore repellendus! Voluptatem, autem!
                        Maiores vel cupiditate veritatis laboriosam. Beatae quos officia natus consectetur repudiandae eveniet labore suscipit, blanditiis nemo minus illo maxime tenetur sed quia reprehenderit numquam ratione neque iure. At, amet placeat?
                        Alias laboriosam fugit expedita praesentium placeat quis, molestiae qui ipsam perspiciatis modi nisi nemo exercitationem corrupti dolorem vero dolor aspernatur, quos animi cum, nesciunt doloribus dolorum necessitatibus magni. Magnam, sit.
                        Aliquam veritatis corporis dolorum nulla necessitatibus, quas cumque illum, quos earum accusantium perferendis rem beatae velit quia saepe sunt temporibus, mollitia nisi consequuntur? Deserunt, unde sequi nam laboriosam excepturi neque!
                        Unde magnam recusandae architecto nostrum mollitia. Quae, quia? Fuga fugiat eum ut harum delectus commodi porro voluptatibus accusamus officia. Maxime quos iure porro dolorem ullam aliquam dignissimos debitis magni est!
                        Dignissimos culpa pariatur fuga! Itaque distinctio aperiam, doloremque minima suscipit quo vel. Aperiam minima pariatur optio error velit modi, atque dicta ex soluta doloribus eaque animi, nulla totam ratione omnis.
                        Ab laborum ad nesciunt natus ducimus labore quo molestias excepturi? Voluptatibus cumque ullam dolorum, dolore assumenda dicta esse quisquam ex quas? Fuga officia voluptates aspernatur rerum recusandae odio nam architecto.
                        Neque, soluta labore non inventore quis, voluptatem voluptates pariatur debitis maiores quasi culpa esse recusandae eligendi placeat blanditiis ea corporis quidem aspernatur libero atque. Quisquam id eum modi ipsa accusantium?
                        Minus sed ut ratione dolores unde, repellendus hic impedit fugiat quas maiores libero, voluptate aut saepe, optio quo labore accusantium? Tenetur saepe accusantium unde quaerat impedit? In doloremque ullam autem!
                        Voluptates nesciunt quod odit officiis facere consectetur temporibus odio amet aperiam inventore sint, veritatis maiores porro voluptatum doloribus aliquid maxime, impedit perferendis. Sequi non soluta molestias officia nesciunt quo ipsa.
                        Tenetur numquam odio similique ullam ipsa odit, temporibus deleniti obcaecati aperiam repellat quod optio sequi necessitatibus accusantium? In natus enim ab earum magni nemo minus similique quasi cumque, odit dignissimos.
                        Reiciendis, eveniet. Deleniti quam praesentium cupiditate perspiciatis, sed natus sequi iure repellat labore suscipit corporis. Officia pariatur enim, voluptatum minima consequuntur, soluta iste ipsa repudiandae blanditiis sapiente odit voluptatibus sed!
                        Cumque accusantium, quo quisquam fuga iusto minus omnis molestias iste sit, tempore vero enim repellendus eaque reiciendis? Esse praesentium ea reiciendis. Optio laborum labore vel facilis quae commodi magnam in.
                        Perspiciatis et tempora quod suscipit neque blanditiis unde illo sapiente itaque. Quae laudantium sequi doloribus similique et officia, nihil inventore quasi quas rem. Necessitatibus porro modi eos voluptas quos molestiae!
                        Dolor, deserunt ex? Repudiandae eum minima quisquam velit, ipsa ex iure? Atque, minus veritatis. Culpa repudiandae voluptate velit repellendus ea eos doloremque. Deleniti, ut magnam tempore quasi quis incidunt voluptate!
                        Nihil rem eveniet quibusdam quos eaque. Facere maxime a odio velit maiores molestiae impedit quasi deleniti earum neque eaque ad illo obcaecati adipisci, corporis iusto distinctio beatae sunt? Explicabo, repudiandae.
                        Cum, molestiae a! Veniam, beatae obcaecati? Consequatur, incidunt magni laborum aut qui ipsa aspernatur ipsam eos modi ut alias dolorem sit accusamus adipisci necessitatibus odio maxime porro culpa eaque molestias?
                        Minus aspernatur amet impedit doloremque quisquam atque nesciunt adipisci sunt beatae quam ex velit non laboriosam, facilis ad distinctio tempora voluptatem tenetur voluptatum consectetur. Tempore eum suscipit aut consequuntur minima!
                        Beatae est eaque accusamus et soluta, harum voluptatibus, accusantium quo, dolor praesentium cumque? Perspiciatis perferendis, alias doloremque corporis nihil ratione accusamus eveniet. Ipsa tempora expedita iusto. Impedit laborum repellendus necessitatibus?
                        Corporis, assumenda ducimus amet fugit atque enim odio mollitia neque earum repellat quibusdam id odit quis eum eaque dolor quos rem molestiae voluptatem velit ratione! Cupiditate amet odit iusto dicta!
                        Laboriosam velit, excepturi expedita amet itaque consequatur voluptatum ipsam omnis eum? Suscipit provident debitis dolor earum sequi obcaecati esse nesciunt necessitatibus deleniti. Nulla dolores facere ratione obcaecati laudantium ad ex.
                        Iure alias, necessitatibus deleniti quis quasi modi ex consequuntur velit sapiente laboriosam vel id explicabo aut labore laudantium! Aut, atque illum. Exercitationem assumenda expedita consectetur dolorem pariatur unde quae voluptatem.
                        Distinctio soluta ducimus dolor rem, modi voluptatum reprehenderit! Iure, mollitia? Sit neque corrupti, assumenda dicta perspiciatis, quis deleniti sed tenetur ex iusto libero doloremque, recusandae harum! Similique aspernatur eius esse?
                        Expedita debitis ut aliquam officiis quis provident ad esse consequatur reprehenderit aperiam blanditiis perspiciatis deleniti earum exercitationem, id cumque ipsam? Minima obcaecati alias, dicta veritatis eos asperiores amet voluptate iusto.
                        Excepturi sapiente perspiciatis, deserunt sunt error voluptatum porro nobis, eos veritatis facere hic quisquam distinctio, ipsum atque voluptatibus sit. Ipsam culpa voluptatem quasi beatae quaerat accusamus expedita delectus, quidem dolorum.
                        Quae nemo sequi nobis, id eum aperiam odit? Laudantium, vitae aspernatur ea repellat perspiciatis dolores molestias cumque nobis rerum fugiat est, autem ratione, possimus quaerat quod facere deserunt natus excepturi?
                        Et perspiciatis, minus magni dolores distinctio, neque debitis facilis recusandae ex, repellendus aliquam iste laborum? Optio, reiciendis ea! Quae explicabo officiis labore et animi tenetur quisquam expedita debitis laudantium nihil?
                        Voluptatem officia velit minus at deleniti, sit voluptatum, facere inventore aspernatur aperiam nisi dolores. Tempora adipisci omnis hic reprehenderit, sapiente unde, totam, pariatur sint quae dolorum laudantium numquam possimus suscipit.
                        Nobis ut ex blanditiis alias sequi tenetur inventore possimus deleniti mollitia, id hic sunt ipsam culpa eveniet, asperiores perferendis odit ea iure autem suscipit! Assumenda maxime ab reiciendis facere ullam.
                        Odit earum vitae tenetur veniam, nemo vero adipisci. Fugiat, repudiandae! Commodi blanditiis corporis aliquam possimus, beatae odio quis temporibus consequuntur rem dolore, et accusantium? Suscipit laborum dicta amet quibusdam impedit.
                        Amet quisquam quidem minima laborum quasi. Obcaecati reprehenderit aspernatur autem saepe voluptatibus modi explicabo sed id odio dolorum aut, nisi facilis porro corporis, quibusdam nostrum animi officia natus deleniti enim.
                        Nisi, eius. Nisi odit reprehenderit magni fuga rem voluptatum repellendus aliquid? Quasi officiis fugiat voluptatem! Veritatis qui earum delectus, sed debitis ipsum sapiente repellat aliquam, esse explicabo vitae dolor aperiam.
                        Quas beatae sapiente iure accusamus molestiae unde nisi impedit obcaecati facilis architecto incidunt natus porro aut minima eius quibusdam error dicta animi aperiam itaque omnis expedita, modi ipsa. Repellat, necessitatibus.
                        Labore provident temporibus repudiandae nihil at incidunt necessitatibus modi tempore, distinctio voluptas quod exercitationem consequatur debitis officia odit ab fuga veniam error soluta quasi nobis animi maiores obcaecati. Impedit, nulla?
                        Rerum inventore nemo, praesentium repudiandae provident sequi eligendi eaque expedita laboriosam placeat vitae explicabo. Odio exercitationem officiis, vero laboriosam placeat cumque a voluptatibus ducimus reprehenderit nisi est et sunt nihil.
                        Dolorum porro totam autem quia culpa est et, nisi itaque ullam laborum nostrum nemo dolore accusantium, neque ipsum molestiae id consequatur. Ut quaerat tempore nihil similique at ducimus voluptas laudantium!
                        Nisi quibusdam libero repellat sed cupiditate ducimus pariatur nostrum eaque dolore harum doloremque fugiat dicta consectetur nobis natus, ratione incidunt aspernatur. Itaque nam deleniti deserunt sed possimus accusamus quis eius!
                        Nihil neque laborum explicabo eveniet voluptatum, unde esse ab adipisci officiis blanditiis odio laboriosam soluta aut, quo ducimus magni repellat! Sint, labore ad officia deserunt possimus similique et delectus repudiandae.
                        Ratione quisquam ea quasi perferendis qui perspiciatis at ducimus ipsa? Minus corporis deserunt, minima cupiditate fuga nesciunt aspernatur error impedit tempore similique earum quia itaque obcaecati quisquam consectetur ipsum dolorum!
                        Quibusdam nostrum dignissimos nihil non, dicta officiis voluptatum voluptatem. Enim obcaecati beatae tempore, sequi deleniti ullam aut quibusdam recusandae. Iusto magni distinctio quas aliquid deleniti labore! Iure praesentium libero cum!
                        Commodi quia accusantium vitae ullam consequatur cumque culpa itaque vel! Deleniti blanditiis et cum ratione optio animi rem distinctio neque sapiente quis aliquam, dignissimos beatae, illum quos dolorem magnam molestias.
                        Ullam numquam a ipsam nesciunt sit nostrum modi rem eligendi provident eos consequuntur, nulla natus asperiores vero cum, expedita reiciendis corrupti, dolor unde dolorum ea vel odit molestias. Sequi, quasi!
                        Excepturi necessitatibus, consequatur ad, repellat, rerum rem sit inventore numquam porro quis autem veritatis totam. Nemo rerum culpa nostrum eum doloribus ea numquam praesentium, saepe incidunt. Tempore nulla nemo molestiae?
                        Numquam ea, tempore eos amet laudantium voluptatum animi doloremque eligendi quod explicabo beatae nostrum ut, quisquam quidem aliquam molestias labore, consectetur vel sunt? Aliquid quaerat optio ipsum possimus saepe exercitationem.
                        Aspernatur debitis error vel ad enim deserunt autem eius, explicabo neque consectetur esse iste excepturi nesciunt veritatis tempora reprehenderit porro id earum voluptatibus. Dolor laudantium quam perspiciatis exercitationem sit esse.
                        Dignissimos quia nisi maiores inventore obcaecati laudantium quas magnam tempora, possimus, adipisci, recusandae eius voluptatibus accusamus. Ratione ipsa sunt magni eligendi odio, non similique saepe eos corporis itaque vitae dolore!
                        Sit porro quos vero cumque quae aperiam cupiditate nesciunt sequi eveniet quaerat harum nostrum quis nobis provident dolorem iste magnam, illo corporis libero reprehenderit est dolore voluptate deserunt architecto? Magni?
                        Eum error ex culpa porro ipsam. Repudiandae exercitationem labore ducimus, numquam recusandae vel sunt, debitis culpa a nobis vitae, nesciunt beatae aperiam accusamus? Laboriosam architecto, repellat ullam fugit debitis corrupti?
                        Mollitia dicta libero atque sint tempore explicabo! Id tempora rerum harum, assumenda perferendis reprehenderit laudantium accusantium praesentium iste architecto nobis consequuntur dolor odit modi voluptatum reiciendis quidem omnis, aliquam atque.
                        Ullam id esse pariatur provident mollitia, quisquam quis consequatur. Odit ratione fugiat dolorum exercitationem veritatis reprehenderit fugit excepturi temporibus, est eaque iure libero inventore. Illum corporis fuga id impedit dolore.
                        Similique fugiat ab velit illum laborum nulla, molestiae perferendis quidem saepe doloremque, odit vel eaque voluptatibus hic aliquid ut unde? Fuga cupiditate, aut possimus error optio obcaecati quasi? Quasi, libero?
                        Consequuntur minima, quam fuga praesentium culpa iste fugiat eos quas distinctio magnam nesciunt error labore nemo a est, cumque assumenda, saepe molestias numquam eligendi eveniet! Qui iure vero earum ex?
                        Neque eaque temporibus corrupti cum molestiae rem, quasi sit minus vel quas enim? Reiciendis, odio praesentium similique rerum totam libero! Pariatur eos laudantium error numquam nisi dolorum consequuntur! Consectetur, sint.
                        Ipsum, cupiditate vero autem sapiente mollitia odio fuga, eos consectetur maxime, facilis repudiandae illo. Repellendus quibusdam voluptates consequuntur neque, minus et mollitia reiciendis dolor laboriosam. Officia necessitatibus aut dolor facilis.
                        Repellendus voluptas veritatis rem maiores, eligendi deleniti repudiandae ex temporibus ipsam atque rerum pariatur, esse quam natus! Tenetur, dolorem. Quo nihil tempore dolor veritatis quasi magni omnis voluptate blanditiis fugiat!
                        Beatae cupiditate asperiores inventore facilis neque quae! Nobis nostrum non, nesciunt voluptate ipsum porro consectetur vitae laboriosam officiis molestiae excepturi earum corporis cum eligendi assumenda, sequi molestias modi tempora quo.
                        Animi magni dolorum corporis quae ea asperiores beatae, eius earum nam iure quaerat aperiam nisi itaque? Sint expedita eos, sit possimus velit asperiores voluptatum consequatur eveniet, sed voluptates tenetur qui.
                        Minus doloribus non ad quae dolor voluptatem maxime tempora sequi perferendis corporis alias nulla reprehenderit adipisci ipsam nemo ex eligendi omnis hic eveniet, voluptas fuga voluptate expedita. Dolorum, beatae voluptatem.
                        Ut, quis? Excepturi quam omnis quis corrupti repellat ullam nobis sequi, quae necessitatibus dicta hic est optio perspiciatis esse corporis laborum modi odio saepe voluptatem fugit magnam delectus, beatae similique.
                        Obcaecati, rem? Perferendis quasi in fuga atque veritatis sit odit odio voluptates numquam, eveniet tempore rem accusamus commodi magni excepturi libero accusantium recusandae labore voluptas distinctio perspiciatis consequatur cum impedit.
                        Quos aperiam pariatur, quae aliquam quasi nostrum ipsa qui a nemo voluptas! Asperiores suscipit error voluptates. Recusandae architecto quia ea veniam soluta eveniet maxime facere nihil eligendi, atque numquam non.
                        {/* ... your content ... */}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
